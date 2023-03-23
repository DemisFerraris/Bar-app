package barapp.barapp.controller;

import jakarta.validation.Valid;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import barapp.barapp.entity.Product;
import barapp.barapp.entity.User;
import barapp.barapp.repository.ProductRepository;
import barapp.barapp.repository.UserRepository;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductRepository productRepository;

    /* endpoint che legge tutti i users*/
    @GetMapping
    public List<User> getAll(
            @RequestParam(name = "firstname", required = false) String firstNameParam,
            @RequestParam(name = "lastname", required = false) String lastNameParam) {

        if (Strings.isNotBlank(firstNameParam) && Strings.isNotBlank(lastNameParam)) {
            // 1) sia firstname che lastname sono valorizzati
            return userRepository.findByFirstNameEqualsIgnoreCaseAndLastNameEqualsIgnoreCase(
                    firstNameParam, lastNameParam);
        } else if (Strings.isNotBlank(firstNameParam)) {
            // 2) solo firstname è valorizzato
            return userRepository.findByFirstNameEqualsIgnoreCase(firstNameParam);
        } else if (Strings.isNotBlank(lastNameParam)) {
            // 3) solo lastname è valorizzato
            return userRepository.findByLastNameEqualsIgnoreCase(lastNameParam);
        }
        // 4) nessuno dei due è valorizzato
        return userRepository.findAll(); // ritorno la lista non filtrata
    }

    /* endpoint che legge un user preso per id*/
    @GetMapping("/{id}")
    public User getById(@PathVariable Integer id) {
        Optional<User> result = userRepository.findById(id);
        if (result.isPresent()) {
            // restituisce lo user con quell'id
            return result.get();
        } else {
            // se non lo trova su database solleva un'eccezione con HTTP Status 404
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User with id " + id + " not found");
        }
    }

    /* endpoint che crea un nuovo user */
    @PostMapping
    public User create(@Valid @RequestBody User newUser) {
        newUser.setId(0);// mi assicuro che abbia id vuoto
        return userRepository.save(newUser); // salvo lo user su database
    }

    /* endpoint che aggiorna un user preso per id */
    @PutMapping("/{id}")
    public User update(@PathVariable Integer id, @Valid @RequestBody User user) {
        Optional<User> result = userRepository.findById(id);
        if (result.isPresent()) {
            // modifico lo user su database
            // restituisco lo user modificato
            User userToUpdate = result.get();
            userToUpdate.setId(id);
            userToUpdate.setUsername(user.getUsername());
            userToUpdate.setFirstName(user.getFirstName());
            userToUpdate.setLastName(user.getLastName());
            userToUpdate.setEmail(user.getEmail());
            userToUpdate.setPassword(user.getPassword());
            userToUpdate.setDateOfBirth(user.getDateOfBirth());

            return userRepository.save(userToUpdate);
        } else {
            // se non trovo l'utente con quell'id sollevo un'eccezione che ritorna HTTP 404
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User with id " + id + " not found");
        }
    }

    /* endpoint che elimina un user per id*/
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        if (userRepository.existsById(id)) {
            // elimino l'utente preso per id
            userRepository.deleteById(id);
        } else {
            // se non trovo l'utente con quell'id sollevo un'eccezione che ritorna HTTP 404
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "user with id " + id + " not found");
        }
    }

                                /* controller per i products */

    /* endpoint che restituisce i products del user preso per id*/
    @GetMapping("/{id}/products")
    public Set<Product> getUserProducts(@PathVariable Integer id) {
        // verifico che lo user esiste
        Optional<User> result = userRepository.findById(id);
        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "user with id " + id + " not found");
        } else {
            User user = result.get();
            // restituisco i products dell'utente
            return user.getProducts();
        }

    }


    /* endpoint che permette di aggiungere un product ad un user preso per id
     * caso 1: lo user non esiste -> http 404
     * caso 2: lo user esiste e il product esiste -> creo la relazione tra i due
     * caso 3: lo user esiste e il product non esiste -> creo il product poi creo la relazione
     * */
    @PostMapping("/{userId}/products")
    public Set<Product> addProductUser(@PathVariable Integer userId, @RequestBody Product product) {
        // verifico che lo user esiste
        Optional<User> result = userRepository.findById(userId);
        if (result.isEmpty()) {
            // caso 1
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "user with id " + userId + " not found");
        } else {
            // prendo lo user da aggiornare
            User user = result.get();
            // cerco su database un product con l'id passato nel body
            Optional<Product> resultProduct = productRepository.findById(product.getId());
            // questo è il product che andrà aggiunto
            Product productToAdd = null;
            if(resultProduct.isPresent() && resultProduct.get().equals(product)){
                // caso 2
                productToAdd = resultProduct.get();
            }else {
                // caso 3
                // creo il nuovo product
                Product productToCreate = new Product(product);
                productToAdd = productRepository.save(productToCreate);

            }
            // adesso che ho un product (nuovo o esistente) lo aggiungo alla relazione
            // gestisco eventuali Set null
            if (user.getProducts() == null){
                user.setProducts(new HashSet<Product>());
            }
            if (productToAdd.getUsers() == null){
                productToAdd.setUsers(new HashSet<User>());
            }
            // la relazione è mappata bidirezionalmente quindi devo aggiornare entrambi i lati
            user.getProducts().add(productToAdd); // aggiungo il product alla lista del user
            productToAdd.getUsers().add(user); // aggiungo lo user alla lista del product
            userRepository.save(user);
            return user.getProducts();
        }
    }

    /*
     * endpoint per rimuovere l'associazione tra un user e un product presi per id
     * caso 1: User esiste, product esiste -> rimuovo l'associazione
     * caso 2: User non esiste -> http 404
     * caso 3: Product non esiste -> http 404
     * */
    @DeleteMapping("/{id}/products/{product_id}")
    public Set<Product> removeProduct(@PathVariable("id") Integer UserId,
                              @PathVariable("product_id") Integer productId) {
        Optional<User> userResult = userRepository.findById(UserId);
        Optional<Product> productResult = productRepository.findById(productId);
        if (userResult.isPresent() && productResult.isPresent()) {
            // caso 1
            // rimuovo associazione da entrambi i lati (in JAVA)
            User user = userResult.get();
            Product product = productResult.get();
            user.getProducts().remove(product);
            product.getUsers().remove(user);
            // salvo lo user sul database
            userRepository.save(user);
            return user.getProducts();
        } else {
            // caso 2 e caso 3
            String message = "";
            if (userResult.isEmpty()) {
                message += "user with id " + UserId + " not found\n";
            }
            if (productResult.isEmpty()) {
                message += "product with id " + productId + " not found";
            }
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, message);
        }
    }




}
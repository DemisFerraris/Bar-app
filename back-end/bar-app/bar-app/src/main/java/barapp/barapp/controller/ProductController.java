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

import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;

    /* endpoint che legge tutti i products*/
    @GetMapping
    public List<Product> getAll(@RequestParam(name = "category", required = false) String categoryParam,
                                @RequestParam(name = "name", required = false) String nameParam){
        if (Strings.isNotBlank(categoryParam) && Strings.isNotBlank(nameParam)){
            // 1) category o name sono valorizzati
            return productRepository.findByCategoryEqualsIgnoreCaseOrNameEqualsIgnoreCase(categoryParam,nameParam);
        } else if (Strings.isNotBlank(categoryParam)) {
            // 2) solo category è valorizzato
            return productRepository.findByCategoryContainingIgnoreCase(categoryParam);
        } else if (Strings.isNotBlank(nameParam)) {
            // 3) solo name è valorizzato
            return productRepository.findByNameContainingIgnoreCase(nameParam);
        }
        // 4) nessuno dei due è valorizzato
        return productRepository.findAll(); // ritorno la lista non filtrata
    }

    /* endpoint che legge un product preso per id*/
    @GetMapping("/{id}")
    public Product getById(@PathVariable Integer id) {
        Optional<Product> result = productRepository.findById(id);
        if (result.isPresent()) {
            // restituisce il product con quell'id
            return result.get();
        } else {
            // se non lo trova su database solleva un'eccezione con HTTP Status 404
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product with id " + id + " not found");
        }
    }

    /* endpoint che crea un nuovo product */
    @PostMapping
    public Product create(@Valid @RequestBody Product newProduct) {
        newProduct.setId(0);// mi assicuro che abbia id vuoto
        return productRepository.save(newProduct); // salvo il product su database
    }

    /* endpoint che aggiorna un product preso per id */
    @PutMapping("/{id}")
    public Product update(@PathVariable Integer id, @Valid @RequestBody Product product) {
        Optional<Product> result = productRepository.findById(id);
        if (result.isPresent()) {
            // modifico il product su database
            // restituisco il product modificato
            Product productToUpdate = result.get();
            productToUpdate.setId(id);
            productToUpdate.setName(product.getName());
            productToUpdate.setImage(product.getImage());
            productToUpdate.setCategory(product.getCategory());
            productToUpdate.setDescription(product.getDescription());
            productToUpdate.setPrice(product.getPrice());

            return productRepository.save(productToUpdate);
        } else {
            // se non trovo il product con quell'id sollevo un'eccezione che ritorna HTTP 404
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "product with id " + id + " not found");
        }
    }

    /* endpoint che elimina un product */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        Optional<Product> result = productRepository.findById(id);
        if (result.isPresent()) {
            // rimuovo il product da tutte le associazioni con i users
            Product product = result.get();
            Set<User> associatedUsers = product.getUsers();
            for (User u : associatedUsers) {
                u.getProducts().remove(product);
            }
            // rimuovo tutti i products dal user
            product.setUsers(null);
            // adesso che non ci sono piú associazioni cancello i products
            productRepository.deleteById(id);
        } else {
            // se non trovo il product con quell'id sollevo un'eccezione che ritorna HTTP 404
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "product with id " + id + " not found");
        }
    }

}

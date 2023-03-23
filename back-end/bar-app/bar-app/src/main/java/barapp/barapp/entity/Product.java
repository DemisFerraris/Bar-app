package barapp.barapp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Set;


@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotBlank
    private String name;
    private String image;
    private String category;
    @Size(max = 550)
    private String description;
    private double price;
    @ManyToMany(mappedBy = "products")
    @JsonIgnore
    private Set<User> users;

    // constructors
    public Product(Integer id, String name, String image, String category, String description, double price, Set<User> users) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.category = category;
        this.description = description;
        this.price = price;
        this.users = users;
    }

    public Product(Product copyProduct) {
        this.id = copyProduct.id;
        this.name = copyProduct.name;
        this.image = copyProduct.image;
        this.category = copyProduct.category;
        this.description = copyProduct.description;
        this.price = copyProduct.price;
        this.users = copyProduct.users;
    }


    public Product() {
    }

    // getter e setter

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }

}

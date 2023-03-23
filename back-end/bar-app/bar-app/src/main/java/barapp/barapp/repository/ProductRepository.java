package barapp.barapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import barapp.barapp.entity.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findByCategoryEqualsIgnoreCaseOrNameEqualsIgnoreCase(String category, String name);

    List<Product> findByCategoryContainingIgnoreCase(String category);

    List<Product> findByNameContainingIgnoreCase(String name);
}

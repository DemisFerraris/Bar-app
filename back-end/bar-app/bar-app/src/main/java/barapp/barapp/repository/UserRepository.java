package barapp.barapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import barapp.barapp.entity.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByFirstNameEqualsIgnoreCaseAndLastNameEqualsIgnoreCase(String firstName, String lastName);

    List<User> findByFirstNameEqualsIgnoreCase(String firsName);

    List<User> findByLastNameEqualsIgnoreCase(String lastName);
}

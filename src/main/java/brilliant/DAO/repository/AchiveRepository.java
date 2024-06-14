package brilliant.DAO.repository;

import brilliant.models.Achive;
import brilliant.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AchiveRepository extends JpaRepository<Achive, Long> {
}

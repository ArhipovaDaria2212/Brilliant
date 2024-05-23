package brilliant.DAO.repository;

import brilliant.models.Lesson;
import brilliant.models.Module;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, Long> {
    List<Lesson> findByModuleOrderById(Module module);
    Lesson findById(long id);
}

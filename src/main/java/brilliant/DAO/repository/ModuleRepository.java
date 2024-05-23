package brilliant.DAO.repository;

import brilliant.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import brilliant.models.Module;

@Repository
public interface ModuleRepository extends JpaRepository<Module, Long> {
    List<Module> findModulesByCourseOrderById(Course course);

    Module findModuleById(Long id);
}

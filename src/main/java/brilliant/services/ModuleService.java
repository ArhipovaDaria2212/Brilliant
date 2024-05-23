package brilliant.services;

import brilliant.DAO.CourseDAO;
import brilliant.DAO.repository.ModuleRepository;
import brilliant.models.Module;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModuleService {

    private final ModuleRepository moduleRepository;
    private final CourseDAO courseDAO;

    public ModuleService(ModuleRepository moduleRepository, CourseDAO courseDAO) {
        this.moduleRepository = moduleRepository;
        this.courseDAO = courseDAO;
    }

    public List<Module> findByCourseId(Long id) {
        return moduleRepository.findModulesByCourseOrderById(courseDAO.getCourse(id).orElseThrow());
    }
}

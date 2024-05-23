package brilliant.services;

import brilliant.DAO.repository.LessonRepository;
import brilliant.DAO.repository.ModuleRepository;
import brilliant.models.Lesson;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LessonService {

    private final LessonRepository lessonRepository;
    private final ModuleRepository moduleRepository;

    public LessonService(LessonRepository lessonRepository, ModuleRepository moduleRepository) {
        this.lessonRepository = lessonRepository;
        this.moduleRepository = moduleRepository;
    }

    public List<Lesson> getAllLessons(Long moduleId) {
        return lessonRepository.findByModuleOrderById(moduleRepository.findModuleById(moduleId));
    }

    public Lesson getLesson(Long id) {
        return lessonRepository.findById(id).orElseThrow();
    }
}

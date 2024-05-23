package brilliant.controllers;

import brilliant.models.Lesson;
import brilliant.services.LessonService;
import com.google.cloud.storage.Blob;
import com.google.firebase.cloud.StorageClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/lessons")
public class LessonController {

    private final LessonService lessonService;

    public LessonController(LessonService lessonService) {
        this.lessonService = lessonService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Lesson>> getLessons(@PathVariable Long id) {
        try {
            List<Lesson> lessons = lessonService.getAllLessons(id);
            return ResponseEntity.ok(lessons);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}

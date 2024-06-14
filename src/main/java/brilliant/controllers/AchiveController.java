package brilliant.controllers;

import brilliant.DTO.CourseDTO;
import brilliant.models.Achive;
import brilliant.services.AchiveService;
import brilliant.services.CourseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/achive")
public class AchiveController {
    private final AchiveService achiveService;

    public AchiveController(AchiveService achiveService) {
        this.achiveService = achiveService;
    }

    @GetMapping("")
    public ResponseEntity<List<Achive>> getCourseById() {
        try {
            List<Achive> achives = achiveService.getAchives();
            return ResponseEntity.ok(achives);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}

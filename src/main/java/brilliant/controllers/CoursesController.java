package brilliant.controllers;

import brilliant.DTO.CourseDTO;
import brilliant.models.Course;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import brilliant.services.CourseService;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/courses")
public class CoursesController {
    private final CourseService courseService;

    public CoursesController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping
    public void addCourse(@RequestBody CourseDTO courseDTO) {
        courseService.addCourse(courseDTO);
    }


    @GetMapping("/{id}")
    public ResponseEntity<CourseDTO> getCourseById(@PathVariable Long id) {
        try {
            CourseDTO course = courseService.getCourseById(id);
            return ResponseEntity.ok(course);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("")
    public ResponseEntity<List<Course>> getCourses() {
        try {
            return ResponseEntity.ok(courseService.getCourses());
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}

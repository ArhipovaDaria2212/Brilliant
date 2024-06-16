package brilliant.controllers;

import brilliant.DTO.CourseDTO;
import brilliant.models.Course;
import brilliant.models.User;
import brilliant.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.connector.Request;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import brilliant.services.CourseService;

import java.util.List;
import java.util.logging.Logger;

@RestController
@Slf4j
@RequestMapping("/courses")
public class CoursesController {
    private final CourseService courseService;
    private final UserService userService;

    public CoursesController(CourseService courseService, UserService userService) {
        this.courseService = courseService;
        this.userService = userService;
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

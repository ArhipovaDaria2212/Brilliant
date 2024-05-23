package brilliant.controllers;

import brilliant.DTO.CourseDTO;
import brilliant.models.Module;
import brilliant.services.ModuleService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/modules")
public class ModuleController {

    private final ModuleService moduleService;

    public ModuleController(ModuleService moduleService) {
        this.moduleService = moduleService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Module>> getModules(@PathVariable Long id) {
        try {
            List<Module> modules = moduleService.findByCourseId(id);
            return ResponseEntity.ok(modules);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}

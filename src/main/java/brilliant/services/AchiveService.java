package brilliant.services;

import brilliant.DAO.CourseDAO;
import brilliant.DAO.repository.AchiveRepository;
import brilliant.DTO.CourseDTO;
import brilliant.models.Achive;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AchiveService {
    private final AchiveRepository repository;

    public AchiveService(AchiveRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public List<Achive> getAchives() {
        return repository.findAll();
    }

}

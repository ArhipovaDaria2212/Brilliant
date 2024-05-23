package brilliant.controllers;

import brilliant.DAO.repository.ReviewRepository;
import brilliant.DTO.ReviewDTO;
import brilliant.models.Category;
import brilliant.models.Review;
import brilliant.services.ReviewService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/reviews")
public class ReviewsController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping("")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Page<ReviewDTO>> getReviews(@RequestParam(defaultValue = "") String category,
                                               @RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "5") int size) {
        try {
            Pageable pageable = PageRequest.of(page, size);
            Page<ReviewDTO> reviews =
                    category.isEmpty() ?
                            reviewService.getReviewsWithPagination(pageable) :
                            reviewService.getReviewsWithPagination(category, pageable);

            return ResponseEntity.ok(reviews);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.notFound().build();
        }
    }
}

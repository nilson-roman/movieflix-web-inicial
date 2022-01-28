package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private AuthService authService;
	
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		Review entity = new Review();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new ReviewDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public List<ReviewDTO> findByIdMovieReview(Long movieId) {
		authService.authenticated();
		List<Review> list = repository.findByIdMovieReview(movieId);
		return list.stream().map(entity -> new ReviewDTO(entity)).collect(Collectors.toList());
	}
	
	private void copyDtoToEntity(ReviewDTO dto, Review entity) {
		entity.setId(dto.getId());
		entity.setText(dto.getText());
		
		User userProfile = authService.authenticated();
		Optional<User> obj = userRepository.findById(userProfile.getId());
		User user = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		entity.setUser(user);
		
		Movie movie = movieRepository.getOne(dto.getMovieId());
		entity.setMovie(movie);
	}
}

package com.devsuperior.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.MovieGenreDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private AuthService authService;
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		authService.authenticated();
		Optional<Movie> obj = repository.findByIdMovieGenre(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new MovieDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public Page<MovieGenreDTO> findByGenre(Long genreId, Pageable pageable){
		if(genreId != 0) {
			Page<Movie> page = repository.findByGenrePage(genreId, pageable);
			return page.map(x -> new MovieGenreDTO(x));
		}else {
			Page<Movie> page = repository.findByGenrePage(pageable);
			return page.map(x -> new MovieGenreDTO(x));
		}
	}
}

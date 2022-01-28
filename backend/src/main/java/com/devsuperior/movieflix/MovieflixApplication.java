package com.devsuperior.movieflix;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.devsuperior.movieflix.repositories.MovieRepository;

@SpringBootApplication
public class MovieflixApplication implements CommandLineRunner {

	@Autowired
	private MovieRepository repository;
	

	public static void main(String[] args) {
		SpringApplication.run(MovieflixApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		repository.count();
		/*System.out.println("\n***Resultado SQL JPQL:");
		
		List<MovieGenreDTO> result1 = repository.findByGenre();
		
		System.out.println("\n***Resultado JPQL:");
		for (MovieGenreDTO obj : result1) {
			System.out.println(obj);
		}
		
		System.out.println("\n\n\n");
		
		List<MovieGenreProjection> list = repository.findByGenre2();
		List<MovieGenreDTO> result2 = list.stream().map(x -> new MovieGenreDTO(x)).collect(Collectors.toList());
		
		System.out.println("\n***Resultado SQL Raiz:");
		for (MovieGenreDTO obj : result2) {
			System.out.println(obj);
		}
		
		Page<Movie> page = repository.findByGenrePage(null);
		Page<MovieGenreDTO> pageDTO = page.map(x -> new MovieGenreDTO(x));
		System.out.println();
		for (MovieGenreDTO obj : pageDTO.getContent()) {
			System.out.println(obj.toString());
		}
		*/
	}
}

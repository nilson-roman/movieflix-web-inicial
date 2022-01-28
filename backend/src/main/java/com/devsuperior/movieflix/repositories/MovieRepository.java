package com.devsuperior.movieflix.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.movieflix.dto.MovieGenreDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.projections.MovieGenreProjection;

public interface MovieRepository extends JpaRepository<Movie, Long> {
		
	@Query("SELECT obj "
			+ "FROM Movie obj "
			+ "WHERE obj.id = :movieId ")
	Optional<Movie> findByIdMovieGenre(Long movieId);
	
	@Query("SELECT "
			+ "new com.devsuperior.movieflix.dto.MovieGenreDTO(obj.id, obj.title, obj.subTitle, obj.year, obj.imgUrl) "
			+ "FROM Movie obj "
			+ "ORDER BY obj.title")
	List<MovieGenreDTO> findByGenre();
	
	@Query(nativeQuery = true, value ="SELECT TB_MOVIE.id, TB_MOVIE.title, TB_MOVIE.sub_Title, TB_MOVIE.year, TB_MOVIE.img_Url "
			+ "FROM TB_MOVIE "
			+ "INNER JOIN TB_GENRE ON "
			+ "TB_MOVIE.genre_id = TB_GENRE.id "
			+ "ORDER BY TB_MOVIE.TITLE ")
	List<MovieGenreProjection> findByGenre2();
	
	@Query("SELECT obj "
			+ "FROM Movie obj "
			+ "ORDER BY obj.title")
	Page<Movie> findByGenrePage(Pageable pageable);		
	
	@Query("SELECT obj "
			+ "FROM Movie obj "
			+ "WHERE obj.genre.id = :genreId")
	Page<Movie> findByGenrePage(Long genreId, Pageable pageable);
}

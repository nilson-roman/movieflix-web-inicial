import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Movie } from "types/movies";
import "./styles.css";
import axios from 'axios';
import { BASE_URL } from 'util/requests';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies/${movieId}`)
      .then((response) => {
        setMovie(response.data);
      })
  }, [movieId]);
  

  return (
    <div className="movie-container">
      <div className="movie-details-container">
        <h4>Tela de listagem de filmes id:{movieId}</h4>
      </div>
    </div>
  );
};

export default MovieDetails;

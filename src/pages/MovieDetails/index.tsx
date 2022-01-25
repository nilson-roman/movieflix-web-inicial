import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Movie } from "types/movies";
import{ AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';

import "./styles.css";

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const params : AxiosRequestConfig = {
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
 
    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
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

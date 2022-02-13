import { Movie } from "types/movies";

import "./styles.css";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="base-card">
      <div className="container-movie">
        <div className="container-movie-image">
          <img src={movie.imgUrl} alt={movie?.title} height="165" />
        </div>
        <div className="container-movie-title"><h5>{movie?.title}</h5></div>
        <div className="container-movie-year"><h6>{movie?.year}</h6></div>
        <div className="container-movie-subtitle"><p>{movie?.subTitle}</p></div>
      </div>
    </div>
  );
};

export default MovieCard;

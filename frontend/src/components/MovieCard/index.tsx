import { Link } from "react-router-dom";
import { Movie } from "types/movies";

import "./styles.css";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-item-card container-movie">
      <div className="container-movie-image">
        <Link to={"/movies/" + movie.id}>
          <img src={movie.imgUrl} alt={movie?.title} />
        </Link>
      </div>
      <div className="container-movie-details">
        <div className="container-movie-title">
          <h5>{movie?.title}</h5>
        </div>
        <div className="container-movie-year">
          <h6>{movie?.year}</h6>
        </div>
        <div className="container-movie-subtitle">
          <p>{movie?.subTitle}</p>
        </div>
        {movie?.synopsis && (
          <div className="container-movie-synopsis">
            <p>{movie?.synopsis}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;

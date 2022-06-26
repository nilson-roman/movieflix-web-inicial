import { Link } from "react-router-dom";
import { Movie } from "types/movies";

import "./styles.css";

type Props = {
  movie: Movie;
  cardStyle: String;
  containerImageStyle: String;
};

const MovieCard = ({ movie, cardStyle, containerImageStyle }: Props) => {
  const imgStyle =
    containerImageStyle == "container-movie-image-details" ? "img-width" : "";
  return (
    <div className={`container-movie ${cardStyle}`}>
      <div className={`${containerImageStyle}`}>
        <Link to={"/movies/" + movie.id}>
          <img src={movie.imgUrl} alt={movie?.title} className={`${imgStyle}`} />
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

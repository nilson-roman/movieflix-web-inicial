import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Review } from "types/review";
import { Movie } from "types/movies";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "util/requests";
import { hasAnyRoles } from "util/auth";
import PostReview from "pages/PostReview";
import UserReview from "pages/UserReview";
import MovieCard from "components/MovieCard";

import "./styles.css";

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [movieDetail, setMovieDetail] = useState<Movie>();
  const [reviews, setReviews] = useState<Review[]>();

  const getMovieReviews = useCallback(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const getMovieDetails = useCallback(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setMovieDetail(response.data);
    });
  }, [movieId]);

  useEffect(() => {
    getMovieReviews();
    getMovieDetails();
  }, [getMovieReviews, getMovieDetails]);

  return (
    <div className="movie-details-container">
      <div className="movie-details-item-container mt-4 mb-4">
        {movieDetail && (
          <MovieCard
            movie={movieDetail}
            cardStyle={"movie-item-by-id-card"}
            containerImageStyle={"container-movie-image-details"}
          />
        )}
      </div>

      {hasAnyRoles(["ROLE_MEMBER"]) && (
        <PostReview movieId={movieId} onSubmitForm={() => getMovieReviews()} />
      )}

      {reviews && (
        reviews.length > 0 &&
        <div className="base-card review-card mt-5">
          {reviews?.map((item) => (
            <UserReview key={item.id} review={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;

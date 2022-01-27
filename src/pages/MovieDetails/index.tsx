import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Review } from "types/review";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "util/requests";
import { hasAnyRoles } from "util/auth";
import PostReview from "pages/PostReview";
import UserReview from "pages/UserReview";

import "./styles.css";

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<Review[]>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  return (
    <div className="movie-container">
      <div className="movie-details-container mb-2">
        <h4>Tela de listagem de filmes id:{movieId}</h4>
      </div>

      {hasAnyRoles(["ROLE_MEMBER"]) && <PostReview movieId={movieId} />}

      {reviews && (
        <div className="base-card review-card mt-5">
          {reviews?.map((item) => 
            <UserReview key={item.id} review={item}/>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
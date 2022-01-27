import { Review } from "types/review";
import StarIcon from "assets/images/star.png";

import "./styles.css";

type Props = {
  review: Review;
};

const UserReview = ({ review }: Props) => {
  return (
    <>
      <div className="user-container">
        <div>
          <img src={StarIcon} alt="starIcon" />
        </div>
        <div className="user-name-container">
          <h1>{review.user.name}</h1>
        </div>
      </div>
      <div className="review-container mb-4">
        <p>{review.text}</p>
      </div>
    </>
  );
};

export default UserReview;

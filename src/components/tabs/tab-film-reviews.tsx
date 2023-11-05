import { ReviewData } from '../../types/review';
import Review from '../review/review';

type FilmReviewsProps = {
  reviews: ReviewData[];
}

export default function FilmReviews({reviews}: FilmReviewsProps): JSX.Element {
  const separator = Math.ceil(reviews.length / 2);
  const firstCol = reviews.slice(0, separator);
  const secondCol = reviews.slice(separator, reviews.length);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstCol.map((review) => (
          <Review key={review.id} date={review.date} user={review.user} comment={review.comment} rating={review.rating}/>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {secondCol.map((review) => (
          <Review key={review.id} date={review.date} user={review.user} comment={review.comment} rating={review.rating}/>
        ))}
      </div>
    </div>
  );
}

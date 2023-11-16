import { ReviewData } from '../../types/review';
import Review from '../review/review';

type FilmReviewsProps = {
  reviews: ReviewData[];
  id: string;
}

export default function FilmReviews({reviews, id}: FilmReviewsProps): JSX.Element {
  const currentReviews = reviews.filter((review) => review.filmId === id);
  const separator = Math.ceil(currentReviews.length / 2);
  const firstCol = currentReviews.slice(0, separator);
  const secondCol = currentReviews.slice(separator, currentReviews.length);

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

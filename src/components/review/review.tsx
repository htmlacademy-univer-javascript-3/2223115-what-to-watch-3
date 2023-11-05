type ReviewProps = {
  date: string;
  user: string;
  comment: string;
  rating: number;
}

const getDate = (date: string) => {
  const newDate = new Date(Date.parse(date));
  return newDate.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
};

const getDateTime = (date:string) => date.split('T')[0];

export default function Review({date, user, comment, rating}: ReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime={getDateTime(date)}>
            {getDate(date)}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

import * as React from 'react';
import {parseDateToStr} from '../../utils/utils';

type User = {name: string}

type Props = {
  user: User;
  rating: number;
  comment: string;
  date: string;
}

const CardReview: React.FC<Props> = ({user, rating, comment, date}: Props) => {

  const dateToStr = parseDateToStr(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{dateToStr}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};


export default CardReview;

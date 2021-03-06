import * as React from 'react';
import {calcCardLevel} from '../../utils/utils';


const RatingRangeLevels = [3, 5, 8, 10];

type Props = {
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: Array<string>;
}

const CardOverview: React.FC<Props> = ({description, rating, scoresCount, director, starring}: Props) => {

  const cardLevel = calcCardLevel(rating, RatingRangeLevels);

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{cardLevel}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

export default CardOverview;

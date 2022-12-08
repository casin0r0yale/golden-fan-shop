import React from 'react';
import ProductRating from './ProductRating.jsx';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';

const RatingBreakdown = (props) => {
  return (
    <div>
      <p>RATINGS & REVIEWS</p>
      <div className="average-stars">
        <h2 className="average-number">{props.rating}</h2>
        <ProductRating rating={props.rating}/>
      </div>
      <CharacteristicsBreakdown />
    </div>
  )
}
export default RatingBreakdown;
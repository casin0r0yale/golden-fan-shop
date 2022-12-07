import React from 'react';
import ProductRating from './ProductRating.jsx';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';

const RatingBreakdown = (props) => {
  return (
    <div>
      <h2>{props.rating}</h2>
      <ProductRating rating={props.rating}/>
      <CharacteristicsBreakdown />
    </div>
  )
}
export default RatingBreakdown;
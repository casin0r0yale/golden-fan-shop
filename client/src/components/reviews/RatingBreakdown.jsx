import React from 'react';
import ProductRating from './ProductRating.jsx';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';

const RatingBreakdown = (props) => {
  return (
    <div>
      <ProductRating rating={props.rating}/>
      <CharacteristicsBreakdown />
    </div>
  )
}
export default RatingBreakdown;
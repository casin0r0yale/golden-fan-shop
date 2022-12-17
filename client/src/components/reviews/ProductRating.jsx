import React from 'react';
import { IoStarSharp, IoStarOutline, IoStarHalfSharp } from 'react-icons/io5';

const ProductRating = (props) => {
  var rating = props.rating;
  var ratingRoundDown = Math.floor(rating);
  var moduleName = props.moduleName;

  const createStars = (number) => {
    var array = [];
    for (var i = 0; i < number; i++) {
      array.push(<IoStarSharp />);
    };
    if (rating % 1 !== 0) {
      array.push(<IoStarHalfSharp />)
      let remainingStarCount = Math.floor(5 - rating);
      for (var j = 0; j < remainingStarCount; j++) {
        array.push(<IoStarOutline />);
      }
    } else {
      let remainingStarCount = 5 - rating;
      for (var k = 0; k < remainingStarCount; k++) {
        array.push(<IoStarOutline />);
      }
    }
    return array;
  }
  var stars = createStars(ratingRoundDown);

  return (
    <div moduleName={moduleName} className="number-of-stars" data-testid="average-stars">
      <span moduleName={moduleName}>{stars}</span>
    </div>
  )
}

export default ProductRating;
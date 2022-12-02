import React, { useState } from 'react';
import { BsStar } from 'react-icons/bs';

const StarRating = (props) => {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleRating = (idx) => {
    setRating(idx);
    props.currRating(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index+= 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            id="star-rating"
            onClick={() => handleRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  )
}

export default StarRating;
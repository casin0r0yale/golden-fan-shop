import React from 'react';

const ProductRating = (props) => {
  console.log('this is the rating: ', props.rating)
  return (
    <div>
      <h1>{props.rating}</h1>
    </div>
  )
}

export default ProductRating;
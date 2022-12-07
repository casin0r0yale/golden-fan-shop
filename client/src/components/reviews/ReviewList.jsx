import React from 'react';
import ReviewTile from './ReviewTile.jsx'

const ReviewList = (props) => {
  var numReviews = props.reviewList.length;
  var reviewList = props.reviewList;
  return (
    <div>
      <h3>{numReviews} reviews, sorted by *sort options*</h3>
      {reviewList.map((review) => {
        return (
          <div>
            <ReviewTile className="review-tile" review={review}/>
          </div>
        )
      })}
      <button>More Reviews</button>
    </div>
  )
}

export default ReviewList;
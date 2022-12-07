import React from 'react';
import ReviewTile from './ReviewTile.jsx'
import { IoMdAdd } from 'react-icons/io';

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
      <button className="more-reviews-button">More Reviews</button>
      <button
        type="button"
        className="add-review-button"
        // value="Add a review  + "
        onClick={props.togglePopup}
      >
      Add a review &nbsp; {<IoMdAdd />}
      </button>
    </div>
  )
}

export default ReviewList;
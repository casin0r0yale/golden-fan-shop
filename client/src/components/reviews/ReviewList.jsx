import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx'
import { IoMdAdd } from 'react-icons/io';

const ReviewList = (props) => {
  var numReviews = props.reviewList.length;
  var reviewList = props.reviewList;
  console.log('reviewList: ', reviewList);
  const postPerClick = 2;
  const [next, setNext] = useState(postPerClick);

  const handleMorePosts = () => {
    setNext(next + postPerClick);
  }

  return (
    <div>
      <div className="review-list">
        {reviewList?.slice(0, next)?.map((review, index) => {
          return (
            <div key={review.review_id} className="review-tile">
              <ReviewTile key={review.review_id} review={review}/>
            </div>
          )
        })}
      </div>
      <div className="review-button-group">
        {next < reviewList?.length && (
        <button
          className="more-reviews-button"
          onClick={handleMorePosts}
          >More Reviews
        </button>
        )}
        <button
          type="button"
          className="add-review-button"
          // value="Add a review  + "
          onClick={props.togglePopup}
        >
        Add a review &nbsp; {<IoMdAdd />}
        </button>
      </div>
    </div>
  )
}

export default ReviewList;
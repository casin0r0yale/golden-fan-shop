import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Popup from '../Popup.jsx';

const Reviews = (props) => {
  var incomingList = props.reviewList;
  const [formView, setFormView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const getAverageRating = (reviewList) => {
    var total = 0;
    reviewList.forEach((review) => {
      total += review.rating;
    });
    var average = total / reviewList.length;
    var rounded = Math.round(average * 10) / 10;
    return rounded;
  }
  var rating = getAverageRating(incomingList);


  return (
    <div>
    <div id="review-list">
      <h3>Review List Module goes here</h3>
    </div>
    <RatingBreakdown rating={rating}/>
    {isOpen && <Popup
      content={<>
        <ReviewForm />
      </>}
      handleClose={togglePopup}
    />}
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
  </div>
  )
}

export default Reviews

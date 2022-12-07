import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Popup from '../Popup.jsx';

const Reviews = (props) => {
  var incomingList = props.reviewList;
  var productInfo = props.product;
  const [formView, setFormView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  // var rating = getAverageRating(incomingList);


  return (
    <div>
      <p>RATINGS & REVIEWS</p>
      <RatingBreakdown rating={props.rating}/>
    <div id="review-list">
      <ReviewList reviewList={incomingList}/>
    </div>
    {isOpen && <Popup
      content={<>
        <ReviewForm productName={productInfo.name}/>
      </>}
      handleClose={togglePopup}
    />}
    <input
      type="button"
      value="Add a review"
      onClick={togglePopup}
    />
  </div>
  )
}

export default Reviews

import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Popup from '../Popup.jsx';

const Reviews = (props) => {

  const [formView, setFormView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
    <div id="review-list">
      <h3>Review List Module goes here</h3>
    </div>
    <RatingBreakdown />
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

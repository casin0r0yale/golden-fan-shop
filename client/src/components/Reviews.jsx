import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm.jsx';

const Reviews = (props) => {

  const [formView, setFormView] = useState(false)

  return (
    <div>
      <div id="review-list">
        <h3>Review List Module goes here</h3>
      </div>
      {(formView === false) ? null :  <ReviewForm/>}
      <button onClick={() => setFormView(!formView)}>
        Add a review
      </button>
    </div>
  )
}

export default Reviews

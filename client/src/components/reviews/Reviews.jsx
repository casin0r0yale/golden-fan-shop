import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Popup from '../Popup.jsx';

const Reviews = (props) => {
  var incomingList = props.reviewList;
  var numReviews = incomingList.length;
  var productInfo = props.product;
  const [formView, setFormView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const useForceUpdate = () => {
    const [value, setValue] = useState([]);
    return () => setValue(value => props.reviewList);
  }

  const forceUpdate = useForceUpdate();

  const relevance = async () => {
    var sorted = await incomingList.sort((p1, p2) => {
      return ((new Date(p2.date) - new Date(p1.date)) && (p2.helpfulness - p1.helpfulness));
    })
    var sortedCopy = [...sorted];
    props.updateReviewList(sortedCopy);
    forceUpdate();
  }

  const newest = async () => {
    var sorted = await incomingList.sort((p1, p2) => {
      return (new Date(p2.date) - new Date(p1.date));
    })
    var sortedCopy = [...sorted];
    props.updateReviewList(sortedCopy);
    forceUpdate();
  }

  const helpfulness = async () => {
    var sorted = await incomingList.sort((p1, p2) => {
      return (p2.helpfulness - p1.helpfulness);
    })
    var sortedCopy = [...sorted];
    props.updateReviewList(sortedCopy);
    forceUpdate();
  }


  const sortBy = (event) => {
    if (event.target.value === "relevance") {
      relevance();
    }
    if (event.target.value === "newest") {
      newest();
    }
    if (event.target.value === "helpfulness") {
      helpfulness();
    }
  }


  return (
    <div className="review-module" data-testid="reviews-module">
      <div className="rating-breakdown">
        <RatingBreakdown rating={props.rating} reviewList={props.reviewList}/>
      </div>
      <div>
        <h3 className="reviewList-title">
          {numReviews} reviews, sorted by &nbsp;
          <select name="sort-options" className="reviewList-sort-button" onChange={sortBy}>
            <option value="relevance" defaultValue>relevance</option>
            <option value="newest">newest</option>
            <option value="helpfulness">helpfulness</option>
          </select>
        </h3>
        <ReviewList reviewList={incomingList} togglePopup={togglePopup}/>
      </div>
      {isOpen && <Popup
        content={<>
          <ReviewForm productName={productInfo.name}/>
        </>}
        handleClose={togglePopup}
      />}
  </div>
  )
}

export default Reviews

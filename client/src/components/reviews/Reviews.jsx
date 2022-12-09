import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Popup from '../Popup.jsx';

const Reviews = (props) => {
  var incomingList = props.reviewList;
  console.log('incomingList: ', incomingList);
  var numReviews = incomingList.length;
  var productInfo = props.product;
  const [formView, setFormView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const [incomingList, setIncomingList] = useState([]);

  // useEffect(() => {
  //   setIncomingList(props.reviewList);
  // }, [])

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const useForceUpdate = () => {
    const [value, setValue] = useState([]);
    return () => setValue(value => props.reviewList);
  }

  const forceUpdate = useForceUpdate();

  //relevance - reviews that are most recent AND helpful, then most recent, then most helpful
  //newest - most recent appears first
  //helpful - reviews with most helpful scores

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
    console.log('this is the sort selection: ', event.target.value);
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
    <div className="review-module">
      <div className="rating-breakdown">
        <RatingBreakdown rating={props.rating}/>
      </div>
      <div>
        <h3 className="reviewList-title">
          {numReviews} reviews, sorted by &nbsp;
          <select name="sort-options" className="reviewList-sort-button" onChange={sortBy}>
            <option value="relevance" selected>relevance</option>
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

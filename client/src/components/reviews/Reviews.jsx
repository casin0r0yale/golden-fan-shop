import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Popup from '../Popup.jsx';

const Reviews = (props) => {
  var incomingList = props.reviewList;
  var numReviews = incomingList.length;
  var productInfo = props.product;
  var meta = props.meta;

  const [formView, setFormView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [starFilterToggle, setStarFilterToggle] = useState(false);
  const [starReviews, setStarReviews] = useState([]);

  const [fiveStar, setFiveStar] = useState(false);
  const [fourStar, setFourStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [twoStar, setTwoStar] = useState(false);
  const [oneStar, setOneStar] = useState(false);
  const [starFilter, setStarFilter] = useState([]);


  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const useForceUpdate = () => {
    const [value, setValue] = useState([]);
    return () => setValue(value => props.reviewList);
  }

  const forceUpdate = useForceUpdate();

  const handleFormSubmit = (object) => {
    console.log('this is the form object:', object);
    var revSubmission = object;
    axios.post('/submitReview', revSubmission)
    .then((success) => {
      console.log('Success form post!')
    })
    .catch((err) => {
      console.error('Error submitting post: ', err);
    });
  }

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

  let starSortedArr = [];
  const starSort = async (value) => {
    if (value === 5) {
      setFiveStar(!fiveStar);
      if (fiveStar) {
         await incomingList.forEach((review) => {
          if (review.rating === 5) {
            starSortedArr.push(review);
          }
        });
      }
      if (!fiveStar) {
        await starSortedArr.forEach((review, index) => {
          if (review.rating === 5) {
            starSortedArr.splice(index, 1);
          }
        });
      }
    }
    if (value === 4) {
      setFourStar(!fourStar);
      if (fourStar) {
        await incomingList.forEach((review) => {
          if (review.rating === 4) {
            starSortedArr.push(review);
          }
        });
      }
      if (!fourStar) {
        await starSortedArr.forEach((review, index) => {
          if (review.rating === 4) {
            starSortedArr.splice(index, 1);
          }
        });
      }
    }
    if (value === 3) {
      setThreeStar(!threeStar);
      if (threeStar) {
        await incomingList.forEach((review) => {
          if (review.rating === 3) {
            starSortedArr.push(review);
          }
        });
      }
      if (!threeStar) {
        await starSortedArr.forEach((review, index) => {
          if (review.rating === 3) {
            starSortedArr.splice(index, 1);
          }
        });
      }
    }
    if (value === 2) {
      setTwoStar(!twoStar);
      if (twoStar) {
        await incomingList.forEach((review) => {
          if (review.rating === 2) {
            starSortedArr.push(review);
          }
        });
      }
      if (!twoStar){
        await starSortedArr.forEach((review, index) => {
          if (review.rating === 2) {
            starSortedArr.splice(index, 1);
          }
        });
      }
    }
    if (value === 1) {
      setOneStar(!oneStar);
      if (oneStar) {
        await incomingList.forEach((review) => {
          if (review.rating === 1) {
            starSortedArr.push(review);
          }
        });
      }
      if (!oneStar) {
        await starSortedArr.forEach((review, index) => {
          if (review.rating === 1) {
            starSortedArr.splice(index, 1);
          }
        });
      }
    }
    // var sorted = await incomingList.filter((review) => {
    //   return review.rating === value;
    // })
    // var sortedCopy = [...sorted];
    await setStarFilter(starSortedArr);
    // props.updateReviewList(starSortedArr);
    console.log('this is the starSortedArr: ', starFilter);
    // forceUpdate();
  }

  return (
    <div className="review-module" data-testid="reviews-module">
      <div className="rating-breakdown">
        <RatingBreakdown rating={props.rating} meta={meta} reviewList={props.reviewList} starSort={starSort}/>
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
          <ReviewForm handleFormSubmit={handleFormSubmit} id={productInfo.id} productName={productInfo.name}/>
        </>}
        handleClose={togglePopup}
      />}
  </div>
  )
}

export default Reviews

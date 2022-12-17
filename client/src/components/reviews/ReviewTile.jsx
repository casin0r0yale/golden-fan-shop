import React, { useState } from 'react';
import ProductRating from './ProductRating.jsx';
import { format } from 'date-fns';
import { AiFillCheckCircle } from 'react-icons/ai'

const ReviewTile = (props) => {
  const date = format(new Date(props.review.date), 'LLLL d, yyyy');
  const photoArr = [];
  if (props.review.photos.length !== 0) {
    const photos = props.review.photos;
    photos.forEach((photo) => {
      photoArr.push(photo.url);
    });
  }
  const [helpful, setHelpful] = useState(false);
  var helpfulClickCount = 0;

  const helpClick = async (review_id) => {
    // console.log('review id: ', review_id);
    helpfulClickCount++
    if (helpfulClickCount <= 1) {
      setHelpful(true);
      await props.handleHelpClick(review_id);
    } else {
      alert('Cannot vote more than once!');
    }
    // console.log('click count: ', helpfulClickCount);
  }

  const reportClick = async (review_id) => {
    await props.handleReportClick(review_id);
    alert('Review has been reported');
  }

  return(
    <div>
      <div className="review-name-date">
        <ProductRating rating={props.review.rating} />
        <p><AiFillCheckCircle />&nbsp;{props.review.reviewer_name}, {date}</p>
      </div>
      <h5>{props.review.summary}</h5>
      {(photoArr.length !== 0) ? photoArr.map((url) => {
        return <img className="review-image"src={url}/>
      }) : null}
      <p>{props.review.body}</p>
      <div className="helpful-report">
        <p>Helpful? <a onClick={() => helpClick(props.review.review_id)}>Yes({(helpful) ? props.review.helpfulness + 1 : props.review.helpfulness})</a>&nbsp;|&nbsp;</p>
        <p onClick={() => reportClick(props.review.review_id)}>Report</p>
      </div>

    </div>
  )
}

export default ReviewTile;
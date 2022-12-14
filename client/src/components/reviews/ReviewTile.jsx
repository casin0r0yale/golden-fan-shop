import React from 'react';
import ProductRating from './ProductRating.jsx';
import { format } from 'date-fns';
import { AiFillCheckCircle } from 'react-icons/ai'

const ReviewTile = (props) => {
  const date = format(new Date(props.review.date), 'LLLL d, yyyy');
  // const photosArr = props.review.photos;
  // const photos = [];
  // console.log('these are my photos: ', photos);

  // if (photosArr.length !== 0) {
  //   photosArr.forEach((photo) => {
  //     photos.push(<img key={photo.id} src={photo.url}/>)
  //   })
  // }

  const helpClick = (review_id) => {
    // console.log('review id: ', review_id);
    props.handleHelpClick(review_id);
  }

  const reportClick = (review_id) => {
    props.handleReportClick(review_id);
  }

  return(
    <div>
      <ProductRating rating={props.review.rating} />
      <p className="review-name-date"><AiFillCheckCircle />&nbsp;{props.review.reviewer_name}, {date}</p>
      <h5>{props.review.summary}</h5>
      <p>{props.review.body}</p>
      <div className="helpful-report">
        <p>Was this review helpful? <a onClick={() => helpClick(props.review.review_id)}>Yes({(props.review.helpfulness) ? props.review.helpfulness : 0})</a>&nbsp;|&nbsp;</p>
        <p onClick={() => reportClick(props.review.review_id)}>Report</p>
      </div>
      {/* {(photos.length !== 0) ? {photos} : null} */}
    </div>
  )
}

export default ReviewTile;
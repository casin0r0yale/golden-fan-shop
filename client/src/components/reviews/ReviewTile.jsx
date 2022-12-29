import React, { useState, useEffect, useRef } from 'react';
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
  var helpRef = useRef(0);

  useEffect(() => {

  }, [helpfulClickCount])

  const helpClick = async (review_id) => {
    // console.log('review id: ', review_id);
    helpfulClickCount++
    helpRef.current++
    if (helpRef.current === 1) {
      setHelpful(true);
      await props.handleHelpClick(review_id);
    } else if (helpRef.current > 1){
      alert('Cannot vote more than once!');
    }
  }

  const reportClick = async (review_id) => {
    await props.handleReportClick(review_id);
    alert('Review has been reported');
  }

  return(
    <div data-testid="review-tile">
      <div className="review-name-date">
        <ProductRating rating={props.review.rating} />
        <p><AiFillCheckCircle />&nbsp;{props.review.reviewer_name}, {date}</p>
      </div>
      <h5>{props.review.summary}</h5>
      <div data-testid="review-images">
        {(photoArr.length !== 0) ? photoArr.map((url, idx) => {
          return <img className="review-image"src={url} key={idx}/>
        }) : null}
      </div>
      <p>{props.review.body}</p>
      <div className="helpful-report">
        <p>Helpful? <a onClick={() => helpClick(props.review.review_id)}>Yes({(helpful) ? props.review.helpfulness + 1 : props.review.helpfulness})</a>&nbsp;|&nbsp;</p>
        <p onClick={() => reportClick(props.review.review_id)}>Report</p>
      </div>

    </div>
  )
}
import React, { useState, useEffect, useRef } from 'react';
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
  var helpRef = useRef(0);

  useEffect(() => {

  }, [helpfulClickCount])

  const helpClick = async (review_id) => {
    // console.log('review id: ', review_id);
    helpfulClickCount++
    helpRef.current++
    if (helpRef.current === 1) {
      setHelpful(true);
      await props.handleHelpClick(review_id);
    } else if (helpRef.current > 1){
      alert('Cannot vote more than once!');
    }
  }

  const reportClick = async (review_id) => {
    await props.handleReportClick(review_id);
    alert('Review has been reported');
  }

  return(
    <div widgetname="Review Tile" data-testid="review-tile">
      <div widgetname="Review Tile" className="review-name-date">
        <ProductRating widgetname="Review Tile" rating={props.review.rating} />
        <p widgetname="Review Tile"><AiFillCheckCircle />&nbsp;{props.review.reviewer_name}, {date}</p>
      </div>
      <h5 widgetname="Review Tile">{props.review.summary}</h5>
      <div widgetname="Review Tile" data-testid="review-images">
        {(photoArr.length !== 0) ? photoArr.map((url, idx) => {
          return <img widgetname="Review Tile" className="review-image"src={url} key={idx}/>
          <h5>{props.review.summary}</h5>
          <div data-testid="review-images">
            {(photoArr.length !== 0) ? photoArr.map((url, idx) => {
              return <img className="review-image"src={url} key={idx}/>
    >>>>>>> main
        }) : null}
      </div>
      <p widgetname="Review Tile">{props.review.body}</p>
      <div widgetname="Review Tile" className="helpful-report">
        <p widgetname="Review Tile">Helpful? <a widgetname="Review Tile" onClick={() => helpClick(props.review.review_id)}>Yes({(helpful) ? props.review.helpfulness + 1 : props.review.helpfulness})</a>&nbsp;|&nbsp;</p>
        <p widgetname="Review Tile" onClick={() => reportClick(props.review.review_id)}>Report</p>
      </div>

    </div>
  )
}

export default ReviewTile;
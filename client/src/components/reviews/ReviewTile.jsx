import React from 'react';
import ProductRating from './ProductRating.jsx';
import { format } from 'date-fns';

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
  return(
    <div>
      <ProductRating rating={props.review.rating} />
      <p>{props.review.reviewer_name}, {date}</p>
      <h5>{props.review.summary}</h5>
      <p>{props.review.body}</p>
      {/* {(photos,length !== 0) ? {photos} : null} */}
    </div>
  )
}

export default ReviewTile;
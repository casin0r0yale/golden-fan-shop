import React from 'react';
import ProductRating from './ProductRating.jsx';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';

const RatingBreakdown = (props) => {
  var reviewList = props.reviewList;
  var numReviews = reviewList.length;
  // console.log('break down props: ', reviewList);

  const ratingPercentage = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  };

  const getPercentage = (tally) => {
    return (tally / numReviews) * 100
  }

  const getAllPercentage = (array) => {
    array.forEach((review) => {
      ratingPercentage[review.rating]++
    });
    for (var rating in ratingPercentage) {
      ratingPercentage[rating] = getPercentage(ratingPercentage[rating]);
    }
    return ratingPercentage;
  }

  var currPercentage = getAllPercentage(reviewList);

  // console.log('this is the current percentage: ', currPercentage);


  return (
    <div>
      <p>RATINGS & REVIEWS</p>
      <div className="average-stars">
        <h2 className="average-number" data-testid="average-number">{props.rating}</h2>
        <ProductRating rating={props.rating}/>
      </div>
      <div>
        <p>100% of reviews recommend this product</p>
        <p>5 stars: {ratingPercentage["5"]}%</p>
        <p>4 stars: {ratingPercentage["4"]}%</p>
        <p>3 stars: {ratingPercentage["3"]}%</p>
        <p>2 stars: {ratingPercentage["2"]}%</p>
        <p>1 stars: {ratingPercentage["1"]}%</p>
      </div>
      <CharacteristicsBreakdown reviewList={props.reviewList}/>
    </div>
  )
}
export default RatingBreakdown;
import React from 'react';
import ProductRating from './ProductRating.jsx';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';
import PercentageBar from './PercentageBar.jsx';

const RatingBreakdown = (props) => {
  var reviewList = props.reviewList;
  var numReviews = reviewList.length;
  // console.log('break down props: ', reviewList);

  const ratingPercentage = {
    1: [0],
    2: [0],
    3: [0],
    4: [0],
    5: [0]
  };

  const getPercentage = (tally) => {
    return (tally / numReviews) * 100
  }

  const getAllPercentage = (array) => {
    array.forEach((review) => {
      ratingPercentage[review.rating][0]++
    });
    for (var rating in ratingPercentage) {
      // ratingPercentage[rating] = getPercentage(ratingPercentage[rating]);
      var percentage = getPercentage(ratingPercentage[rating]);
      ratingPercentage[rating].push(percentage);
    }
    return ratingPercentage;
  }

  var currPercentageArr = Object.values(getAllPercentage(reviewList));

  console.log('this is the current percentage: ', currPercentageArr);


  return (
    <div>
      <p>RATINGS & REVIEWS</p>
      <div className="average-stars">
        <h2 className="average-number" data-testid="average-number">{props.rating}</h2>
        <ProductRating rating={props.rating}/>
      </div>
      <div>
        <p>100% of reviews recommend this product</p>
        {currPercentageArr.map((rating, idx) => {
          return <p>{idx + 1} stars <PercentageBar bgcolor={'#59981A'} completed={rating[1]}/>{rating[0]} reviews</p>
        })}
      </div>
      <CharacteristicsBreakdown reviewList={props.reviewList}/>
    </div>
  )
}
export default RatingBreakdown;
import React from 'react';
import ProductRating from './ProductRating.jsx';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';
import PercentageBar from './PercentageBar.jsx';

const RatingBreakdown = (props) => {
  var reviewList = props.reviewList;
  var numReviews = reviewList.length;
  var numRecommend = 0;
  console.log('break down props: ', reviewList);

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
      if (review.recommend) {
        numRecommend++
      }
      ratingPercentage[review.rating][0]++
    });
    for (var rating in ratingPercentage) {
      var percentage = getPercentage(ratingPercentage[rating]);
      ratingPercentage[rating].push(percentage);
    }
    return ratingPercentage;
  }

  var currPercentageArr = Object.values(getAllPercentage(reviewList));
  return (
    <div>
      <p>RATINGS & REVIEWS</p>
      <div className="average-stars">
        <h2 className="average-number" data-testid="average-number">{props.rating}</h2>
        <ProductRating rating={props.rating}/>
      </div>
      <div>
        <h3>Rating Breakdown</h3>
        <p>{(numRecommend / numReviews) * 100}% of reviews recommend this product</p>
        {currPercentageArr.slice(0).reverse().map((rating, idx) => {
          return <p onClick={() => console.log('clicked on this star:', currPercentageArr.length +  1 - 1 - idx)}>{currPercentageArr.length +  1 - 1 - idx} stars
          <PercentageBar bgcolor={'#59981A'} completed={rating[1]}/>{rating[0]} reviews</p>
        })}
      </div>
      <CharacteristicsBreakdown reviewList={props.reviewList}/>
    </div>
  )
}
export default RatingBreakdown;
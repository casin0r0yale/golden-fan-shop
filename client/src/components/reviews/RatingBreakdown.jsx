import React from 'react';
import ProductRating from './ProductRating.jsx';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';
import PercentageBar from './PercentageBar.jsx';

const RatingBreakdown = (props) => {
  var reviewList = props.reviewList;
  var numReviews = reviewList.length;
  var numRecommend = 0;
  var meta = props.meta;
  var metaArr = [];
  console.log('break down meta: ', meta);

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

  const getAllCharacteristics = (obj) => {
    for (var characteristic in obj) {
      metaArr.push([characteristic, Number(obj[characteristic]["value"])]);
    }
    return metaArr;
  }
  getAllCharacteristics(meta.characteristics);
  console.log('these are my characteristics arr: ',  metaArr);
  console.log('meta arr idx:', metaArr[0]);
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
        <p>{Math.floor((numRecommend / numReviews) * 100)}% of reviews recommend this product</p>
          <div className="star-bars">
            {currPercentageArr.slice(0).reverse().map((rating, idx) => {
            let currStar = currPercentageArr.length - idx;
            return <div><p onClick={() => props.starSort(currStar)} className="bar">{currStar} stars
            <PercentageBar bgcolor={'#59981A'} completed={rating[1]}/>{rating[0]} reviews</p></div>
            })}
          </div>
      </div>
          <div className="characteristics-bars">
            {metaArr.map((review) => (
              // return
              <div>
                <p>{review[0]}</p>
                <CharacteristicsBreakdown completed={review[1] * 10}/>
              </div>
            ))}
          </div>
    </div>
  )
}
export default RatingBreakdown;
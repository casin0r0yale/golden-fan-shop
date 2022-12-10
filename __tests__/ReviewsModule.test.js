import React, {useEffect, useState} from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import sinon from 'sinon';
import { spy } from 'sinon';

import Reviews from '../client/src/components/reviews/Reviews.jsx';
import ReviewList from '../client/src/components/reviews/ReviewList.jsx';
import ReviewForm from '../client/src/components/reviews/ReviewForm.jsx';

var reviewList = [
  {
      "review_id": 1277589,
      "rating": 1,
      "summary": "not very good",
      "recommend": false,
      "response": null,
      "body": "it's not what i expected",
      "date": "2022-12-02T00:00:00.000Z",
      "reviewer_name": "uud",
      "helpfulness": 0,
      "photos": []
  },
  {
      "review_id": 1277070,
      "rating": 5,
      "summary": "why?",
      "recommend": true,
      "response": null,
      "body": "I dont understand why api returns CREATED, but i can not see my review",
      "date": "2022-10-23T00:00:00.000Z",
      "reviewer_name": "www",
      "helpfulness": 0,
      "photos": [
          {
              "id": 2456432,
              "url": "https://i.ibb.co/938pJdd/34d3b8081eff.jpg"
          }
      ]
    }
  ];

var productInfo = {
  id: 71704,
  name: "YEasy 350"
};

var rating = 4;


describe ('Ratings & Reviews Testing', () => {
  test('Reviews & Ratings Module should render', () => {
    render(<Reviews rating={rating} reviewList={reviewList} product={productInfo}/>);

    const reviewModule = screen.queryByTestId('reviews-module');
    expect(reviewModule).toBeInTheDocument();
  });

  test('Should render average rating number', () => {
    const averageNumber = screen.queryByTestId('average-number');
  });

  test('Should render average stars', () => {
    const averageStars = screen.queryByTestId('average-stars');
  });

});

// describe('Review form should load after ADD REVIEW button click', () => {
//   test('Button click is functional', () => {
//     render(<Reviews rating={rating} reviewList={reviewList} product={productInfo}/>);

//     const addReviewButton = screen.queryByTestId('add-review-button');
//     userEvent.click(addReviewButton).toBe(true);

//     // expect(screen.queryByTestId('review-form')).toBeInTheDocument();

//   });
// });


import React, {useEffect, useState} from 'react';
import { render, screen } from '@testing-library/react'
import chai, { expect, should, exist } from 'chai';
chai.use(require('chai-dom'));
import sinon from 'sinon';
import { spy } from 'sinon';
import Reviews from './client/src/components/reviews/Reviews.jsx';
// import App from './client/src/index.jsx';

describe('Ratings & Reviews Test', function() {

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

  it('Review component should exist', () => {

    render(<Reviews reviewList={reviewList} rating={4} product={productInfo} />);
    // The next line is searching for an element with the text: "Review List Module"
    // const linkElement = screen.getByText(/RATINGS & REVIEWS/);
    // expect(linkElement).to.exist;
    expect(screen.getByText(/RATINGS & REVIEWS/)).to.exist;
  });
});


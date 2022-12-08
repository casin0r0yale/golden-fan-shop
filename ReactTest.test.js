import React, {useEffect, useState} from 'react';
import { render, screen } from '@testing-library/react'
import chai, { expect, should, exist } from 'chai';
chai.use(require('chai-dom'));
import sinon from 'sinon';
import { spy } from 'sinon';
import Reviews from './client/src/components/reviews/Reviews.jsx';
import RelatedCard from './client/src/components/relatedProductsAndYourOutfit/RelatedCard.jsx';
import App from './client/src/index.jsx';


describe('Ratings & Reviews Test', function() {

  it('Review component should exist', () => {

    render(<RelatedCard />);
    // The next line is searching for an element with the text: "Review List Module"
    const linkElement = screen.getByText(/TODO/);
    expect(linkElement).to.exist;
  })

})
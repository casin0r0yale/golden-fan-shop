import React, {useEffect, useState} from 'react';
import { render, screen } from '@testing-library/react'
import chai, { expect, should, exist } from 'chai';
chai.use(require('chai-dom'));
import sinon from 'sinon';
import { spy } from 'sinon';
import Reviews from './client/src/components/Reviews.jsx';

describe('Ratings & Reviews Test', function() {

  it('Review component should exist', () => {

    render(<Reviews />);
    // The next line is searching for an element with the text: "Review List Module"
    const linkElement = screen.getByText(/Review List Module/i);
    expect(linkElement).to.exist;
  })

});
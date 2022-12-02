import React, {useEffect, useState} from 'react';
import { render } from '@testing-library/react'
import chai, { expect } from 'chai';
import sinon from 'sinon';
import { spy } from 'sinon';
import Reviews from '../client/src/components/Reviews.jsx';


describe('Ratings & Reviews Test', function() {

  it('Review component should exist', () => {
    render(<Reviews />);
    expect(Reviews).to.exist(true);
  })

});
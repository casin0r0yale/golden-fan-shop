var request = require('request');
var expect = require('chai').expect;
var sinon = require('sinon');
import React, {useEffect, useState} from 'react';
import { render } from '@testing-library/react';
import sinon from 'sinon';
import { spy } from 'sinon';
import Reviews from '../client/src/components/Reviews.jsx';

describe('SERVER TESTS:', function() {

  it('should respond to GET requests for INIT /getProducts with a 200 status code', function(done) {
    request('http://127.0.0.1:3000/getProducts', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

});

describe('Ratings & Reviews Test', function() {

  it('Review component should exist', () => {
    render(<Reviews />);
    expect(Reviews).to.exist(true);
  })

});

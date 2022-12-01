var request = require('request');
var expect = require('chai').expect;
var shallow = require('enzyme');
var sinon = require('sinon');
var mount = require('enzyme');

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
    const wrapper = shallow(<Reviews/>);
    expect(wrapper.find(Reviews)).to.exist;
  })

})

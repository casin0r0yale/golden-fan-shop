var request = require('request');
var expect = require('chai').expect;

describe('SERVER TESTS:', function() {

  it('should respond to GET requests for INIT /getProducts with a 200 status code', function(done) {
    request('http://127.0.0.1:3000/getProducts', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

});

const axios = require('axios');

exports.postReviewForm = (req, res) => {

  var incomingReview = req.body;

  // const options = {
  //   method: 'POST',
  //   url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${incomingParamProductId}`,
  //   headers: { Authorization: process.env.AUTH_SECRET },
  // };

  console.log('this is the incoming review: ', incomingReview);

}
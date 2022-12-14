const axios = require('axios');

exports.postReviewForm = (req, res) => {

  var incomingReview = req.body;
  console.log('this is the incoming review: ', incomingReview);

  const options = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews`,
    headers: { Authorization: process.env.AUTH_SECRET },
    data: incomingReview
  };
  axios.post(options)
  .then((results) => {
    res.status(201).send(results);
  })
  .catch((error) => {
    res.status(500).send(error);
  });
}
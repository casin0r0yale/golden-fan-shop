const axios = require('axios');

exports.postReviewForm = (req, res) => {

  var incomingReview = req.body;
  console.log('this is the incoming review: ', incomingReview);

  const options = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews`,
    headers: { Authorization: process.env.AUTH_SECRET },
    "Content-Type": 'application/json',
    data: incomingReview
  };
  axios(options)
  .then((results) => {
    var created = JSON.parse(JSON.stringify(results.data));
    res.status(201).send(created);
  })
  .catch((error) => {
    console.log('failure in the api server: ', error);
    res.status(500).send(error);
  });
}

exports.postClickTrack = (req, res) => {

  var clickTrackData = req.body;

  var options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
    method: 'POST',
    headers: { Authorization: process.env.AUTH_SECRET },
    "Content-Type": 'application/json',
    data: clickTrackData
  };

  axios(options)
  .then((results) => {
    var clickTrackSuccess = JSON.parse(JSON.stringify(results.data));
    res.status(201).send(clickTrackSuccess);
  })
  .catch((error) => {
    console.log('failure in the api click track server: ', error);
    res.status(500).send(error);
  });
}


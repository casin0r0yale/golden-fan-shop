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
exports.postQuestionForm = (req, res) => {
  var incomingQuestion = req.body;
  const options = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`,
    headers: {Authorization: process.env.AUTH_SECRET},
    "Content-Type": 'application/json',
    data: incomingQuestion
  }
  axios(options)
  .then(results => {
    console.log('Success: ',results.data);
    var created = JSON.parse(JSON.stringify(results.data));
    res.status(201).send(created);
  })
  .catch(err => {
    console.log('failure in the  Question api server: ', err);
    res.status(500).send(err)
  })
}

exports.postAnswerForm = (req, res) => {
  var incomingAnswer = req.body;
  var questionId = incomingAnswer.questionId;
  delete incomingAnswer.questionId;
  const options = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/answers`,
    headers: {Authorization: process.env.AUTH_SECRET},
    "Content-Type": 'application/json',
    data: incomingAnswer
  }
  axios(options)
  .then(results => {
    console.log('Success: ', results.data);
    var created = JSON.parse(JSON.stringify(results.data));
    res.status(201).send(created)
  })
  .catch(err => {
    console.log('failure in the Answer api server: ', err);
    res.status(500).send(err)
  })
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

exports.postImg = (req, res) => {
  var imgFile = req;
  console.log('this is the imgFile name:', imgFile);

  var options = {
    url: 'https://api.imgbb.com/1/upload',
    method: 'POST',
    key: process.env.IMGBB_KEY,
    image: imgFile
  }

  axios(options)
  .then((results) => {
    var imgURL = JSON.parse(JSON.stringify(results.data));
    console.log('success POST img url', imgURL);
    res.status(201).send(results);
  })
  .catch((error) => {
    console.log('error getting img url', error);
    res.status(500).send(error);
  });

}


const axios = require('axios');

exports.putHelpClick = (req, res) => {

  const review_id = req.body.review_id;
  console.log('review id in server helpClick: ', review_id);

  const options = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${review_id}/helpful`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };
  axios(options)
  .then((results) => {
    var data = JSON.parse(JSON.stringify(results.data));
    res.status(204).send(data);
  })
  .catch((error) => {
    res.status(500).send(error);
  });

};

exports.putReportClick = (req, res) => {

  const review_id = req.body.review_id;
  console.log('review id in server reportClick: ', review_id);

  const options = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${review_id}/report`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };
  axios(options)
  .then((results) => {
    var data = JSON.parse(JSON.stringify(results.data));
    res.status(204).send(data);
  })
  .catch((error) => {
    res.status(500).send(error);
  });

};
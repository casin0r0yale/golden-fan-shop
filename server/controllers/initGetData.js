const axios = require ('axios')

exports.getCurrentProductCardControl = (req, res) => {

  var incomingParamProductId = req.query.id;

  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${incomingParamProductId}`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };

  axios(options)
  .then((result) => {
    res.status(200).send(result.data)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err)
  })
}

exports.getProductStylesControl = (req, res) => {

  var incomingParamProductId = req.query.id;

  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${incomingParamProductId}/styles`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };
  axios(options)
  .then((result) => {
    res.status(200).send(result.data)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err)
  })
}

exports.getProductRelatedControl = (req, res) => {

  var incomingParamProductId = req.query.id;

  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${incomingParamProductId}/related`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };
  axios(options)
  .then((result) => {
    // Logic code controller need to import function
    res.status(200).send(result.data)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err)
  })
};

exports.getProductReviewsControl = (req, res) => {

  var incomingParamProductId = req.query.id;

  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${incomingParamProductId}`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };
  axios(options)
  .then((result) => {
    res.status(200).send(result.data)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err)
  })
};


exports.getProductQnAControl = (req, res) => {

  var incomingParamProductId = req.query.id;

  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${incomingParamProductId}`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };
  axios(options)
  .then((result) => {
    res.status(200).send(result.data)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err)
  })
}
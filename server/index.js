// EXPRESS SERVER Index

require('dotenv').config();
const express = require ("express");
const axios = require ('axios')
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors()); // Not sure if needed
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../client/dist'));
app.listen(3000, () => console.log('Our Server is listening on port 3000...'));

// INIT GET ROUTES

  // VIEW of the server
app.get('/getProductGeneralInfo', (req, res) => {

  var incomingParamProductId = req.query.id;

  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${incomingParamProductId}`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };

  axios(options)
  .then((result) => {
    // Controller code
    // console.log('index/server result, ', result);

    res.status(200).send(result.data)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err)
  })
})

app.get('/getProductStyles', (req, res) => {

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
})

app.get('/getProductRelated', (req, res) => {

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
})

app.get('/getProductReviews', (req, res) => {

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
})

app.get('/getProductQnA', (req, res) => {

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
})
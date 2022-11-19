// EXPRESS SERVER Index

require("dotenv").config();
const express = require ("express");
const axios = require ("axios")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000, () => console.log('Our Server is listening on port 3000...'));

app.get('/getProducts', (req, res) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };
  axios(options)
  .then((result) => {
    console.log(result);
    res.status(200).send(result.data)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err)
  })
})
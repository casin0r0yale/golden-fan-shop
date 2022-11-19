// EXPRESS SERVER Index

const express = require ("express");
const axios = require ("axios")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000, () => console.log('Our Server is listening on port 3000...'));

app.get('/getProducts', (req, res) => {

  app.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products')
  res.send('hello world')
})
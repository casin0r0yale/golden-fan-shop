// EXPRESS SERVER Index

const express = require ("express");
const axios = require ("axios")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('/Users/admin/Desktop/RPP2207 Sprints/golden-fan-shop/client/dist'));

app.listen(3000, () => console.log('Our Server is listening on port 3000...'));

app.get('/getProducts', (req, res) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };
  axios(options)
  .then((data) => {
    console.log(data);
    res.send(data)
  })
})
// EXPRESS SERVER Index

require('dotenv').config();
const express = require ("express");
const axios = require ('axios')
const app = express();
const cors = require("cors");
const initGetData = require("./controllers/initGetData.js");


app.use(express.json());
app.use(cors()); // Not sure if needed
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../client/dist'));
app.listen(3000, () => console.log('Our Server is listening on port 3000...'));

// INIT GET ROUTES

app.get('/getProductGeneralInfo', initGetData.getCurrentProductCardControl);

app.get('/getProductStyles', initGetData.getProductStylesControl);

app.get('/getProductRelated', initGetData.getProductRelatedControl);

app.get('/getProductReviews', initGetData.getProductReviewsControl);

app.get('/getProductQnA', initGetData.getProductQnAControl);
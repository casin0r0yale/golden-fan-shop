// EXPRESS SERVER Index

require('dotenv').config();
const express = require ("express");
const axios = require ('axios')
const app = express();
const cors = require("cors");
const initGetData = require("./controllers/initGetData.js");
const postData = require('./controllers/postData.js');
const putData = require('./controllers/putData.js');


app.use(express.json());
app.use(cors()); // Not sure if needed
app.use(express.urlencoded({ extended: false }));

app.use('/ip/:id', express.static(__dirname + '/../client/dist'));
app.listen(3000, () => console.log('Our Server is listening on port 3000...'));

// ROUTES

app.get('/', initGetData.redirectFromHome);

app.get('/ipCurrent', initGetData.getCurrentProductCardControl);
// app.get('/ip/:id', initGetData.getCurrentProductCardControl);

app.get('/ipRelated', initGetData.getRelatedProductCardControl);

app.get('/getProductStyles', initGetData.getProductStylesControl);

app.get('/getProductRelated', initGetData.getProductRelatedControl);

app.get('/getProductReviews', initGetData.getProductReviewsControl);

app.get('/getProductReviewMeta', initGetData.getProductReviewMeta);

app.get('/getProductQnA', initGetData.getProductQnAControl);

app.post('/submitReview', postData.postReviewForm);

app.post('/clickTrackPost', postData.postClickTrack);

app.put('/helpClick', putData.putHelpClick);

app.put('/reportClick', putData.putReportClick);
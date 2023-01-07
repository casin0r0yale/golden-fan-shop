/**
 * @jest-environment node
 */

import request from 'supertest';
import express from 'express';
import initGetData from "../server/controllers/initGetData.js";
import postData from '../server/controllers/postData.js';
import putData from'../server/controllers/putData.js';

const app = new express();
app.use('/', initGetData.redirectFromHome);

describe('Good Home Routes', function () {

  test('Route "/" should redirect with status 304', async () => {
    const res = await request(app).get('/');
    // expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(302);
  });

});





// // EXPRESS SERVER Index

// require('dotenv').config();
// const express = require ("express");
// const axios = require ('axios')
// const request = require('supertest');
// const app = express();

// const cors = require("cors");
// const initGetData = require("../server/controllers/initGetData.js");
// const postData = require('../server/controllers/postData.js');
// const putData = require('../server/controllers/putData.js');
// //for image uploads
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' });

// const deleteData = require('../server/controllers/deleteData.js');
// const compression = require('compression');

// app.use(express.json());
// app.use(cors()); // Not sure if needed
// app.use(compression())
// app.use(express.urlencoded({ extended: false }));

// app.use('/ip/:id', express.static(__dirname + '/../client/dist'));
// app.listen(3000, () => console.log('Our Server is listening on port 3000...'));

// test('server status code 200', () => {

//   app.get('/', (req, res) => {
//     const statusCode = res.statusCode;
//     expect(statusCode).to.equal(200);
//   })

// })
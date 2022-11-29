import React, { useState, useEffect } from 'react';
import "../styles/index.css";


const Overview = (props) => {

  return (
    <div>
      <h1>CSS Test</h1>
      <div class="overviewContainer">
      <div class="productInfo">product info </div>
      <div class="styleSelector">styleSelector </div>
      <div class="addToCart">addToCart </div>
      <div class="imageGallery">imageGallery </div>
      </div>
    </div>
  )
}

export default Overview;

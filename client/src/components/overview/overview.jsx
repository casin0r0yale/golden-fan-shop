import React, { useState, useEffect } from 'react';
import "../../styles/index.css";
import AddToCart from './addToCart.jsx';
import ImageGallery from './imageGallery.jsx';
import ProductInfo from './productInfo.jsx';
import StyleSelector from './styleSelector.jsx';

const Overview = (props) => {
  // console.log('overview', props);

  return (
    <div>
      <h1>CSS Test</h1>
      <div class="overviewContainer">
      <div class="productInfo"><ProductInfo/></div>
      <div class="styleSelector"><StyleSelector styles={props.styles}/></div>
      <div class="addToCart"><AddToCart/></div>
      <div class="imageGallery"><ImageGallery/></div>
      </div>
    </div>
  )
}

export default Overview;

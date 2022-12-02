import React, { useState, useEffect } from 'react';
import "../../styles/index.css";
import AddToCart from './addToCart.jsx';
import ImageGallery from './imageGallery.jsx';
import ProductInfo from './productInfo.jsx';
import StyleSelector from './styleSelector.jsx';

const Overview = (props) => {
  console.log('overview', props.info);

  return (
    <div>
      <div class="overviewContainer">
      <div class="productInfo"><ProductInfo info={props.info}/></div>
      <div class="styleSelector"><StyleSelector styles={props.styles}/></div>
      <div class="addToCart"><AddToCart/></div>
      <div class="imageGallery"><ImageGallery styles={props.styles}/></div>
      </div>
    </div>
  )
}

export default Overview;
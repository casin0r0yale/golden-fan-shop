import React, { useState, useEffect } from 'react';
import ProductRating from '../reviews/ProductRating.jsx';
import "../../styles/index.css";



const ProductInfo = (props) => {
  // console.log('general info', props.info);

  return (
    <div style={{paddingBottom: "-10em"}}>
      <ProductRating/>
      <p>CATEGORY</p>
      <h1>{props.info.name}</h1>
    </div>
  )
}

export default ProductInfo;
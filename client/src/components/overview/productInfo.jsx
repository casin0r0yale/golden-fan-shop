import React, { useState, useEffect } from 'react';
import "../../styles/index.css";


const ProductInfo = (props) => {
  // console.log('general info', props.info);

  return (
    <div style={{paddingBottom: "-10em"}}>
      <p>Insert rating here...</p>
      <p>CATEGORY</p>
      <h1>{props.info.name}</h1>
    </div>
  )
}

export default ProductInfo;
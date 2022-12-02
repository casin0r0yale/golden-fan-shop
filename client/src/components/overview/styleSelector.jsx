import React, { useState, useEffect } from 'react';
import "../../styles/index.css";


const StyleSelector = (props) => {
  console.log(props.styles[0]?.original_price)
  return (
    <div>
      <p>${props.styles[0]?.original_price}</p>
      <h3>STYLE &gt; <span style={{ fontWeight: "normal" }}>SELECTED STYLE</span></h3>
      <div class="styleContainer">
        {props.styles?.map(product => {
          return (<img class="stylePreview" src={product.photos[0].thumbnail_url}/>)
        }
        )}
     
      </div>
    </div>
  )
}

export default StyleSelector;
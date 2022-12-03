import React, { useState, useEffect } from 'react';
import "../../styles/index.css";


const StyleSelector = (props) => {

  // console.log(props.styles)

  return (
    <div>
      <p>${props.styles[0]?.original_price}</p>
      <h3>STYLE &gt; <span style={{ fontWeight: "normal" }}>SELECTED STYLE</span></h3>
      <div class="styleContainer">
        {props.styles?.map((product, index) => {
        
          return (index === props.styleIndex? 
          <img class="stylePreview selected" src={product.photos[0].thumbnail_url} onClick={() => props.onClick(index)} /> :
          <img class="stylePreview" src={product.photos[0].thumbnail_url} onClick={() => props.onClick(index)} />
          )
        }
        )}

      </div>
    </div>
  )
}

export default StyleSelector;
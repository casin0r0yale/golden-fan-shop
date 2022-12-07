import React, { useState, useEffect } from 'react';
import "../../styles/index.css";


const StyleSelector = (props) => {

  // console.log(props.styles)

  return (
    <div>
      {!props.styles[props.styleIndex]?.sale_price ? <p>${props.styles[props.styleIndex]?.original_price}</p>
        :
        <p><span className="strikeThrough"> ${props.styles[props.styleIndex]?.original_price} </span> ${props.styles[props.styleIndex]?.sale_price}</p>
      }
      <h3>STYLE &gt; <span style={{ fontWeight: "normal" }}>SELECTED STYLE</span></h3>
      <div class="styleContainer">
        {props.styles?.map((product, index) => {

          return (index === props.styleIndex ?
            <div style={{position: "relative"}}>
              <div className="selected">&#8202; &#x2713;</div>
              <img className="stylePreview" src={product.photos[0].thumbnail_url} onClick={() => props.onClick(index)} />
            </div>
            :
            <img class="stylePreview" src={product.photos[0].thumbnail_url} onClick={() => props.onClick(index)} />
          )
        }
        )}

      </div>
    </div>
  )
}

export default StyleSelector;
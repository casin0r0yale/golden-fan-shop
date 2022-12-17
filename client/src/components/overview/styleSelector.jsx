import React, { useState, useEffect } from 'react';
import "../../styles/index.css";

const StyleSelector = (props) => {

  // console.log(props.styles)

  return (
    <div moduleName="Overview"  className="styleSelector">
      {!props.styles[props.styleIndex]?.sale_price ? <p>${props.styles[props.styleIndex]?.original_price}</p>
        :
        <p><span  moduleName="Overview" className="strikeThrough"> ${props.styles[props.styleIndex]?.original_price} </span> ${props.styles[props.styleIndex]?.sale_price}</p>
      }
      <h3 moduleName="Overview" >STYLE &gt; <span  moduleName="Overview" style={{ fontWeight: "normal" }}>SELECTED STYLE</span></h3>
      <div moduleName="Overview"  className="styleContainer">
        {props.styles?.map((product, index) => {

          return (index === props.styleIndex ?
            <div moduleName="Overview" >
              <div moduleName="Overview"  className="styleGroup">
                <div moduleName="Overview"  className="selected">&#8202; &#x2713;</div>
                <img  moduleName="Overview" className="stylePreview" src={product.photos[0].thumbnail_url} onClick={() => props.onClick(index)} />
              </div>
            </div>
            :
            <div moduleName="Overview" >

              <div moduleName="Overview"  className="styleGroup">
                <img  moduleName="Overview" className="stylePreview" src={product.photos[0].thumbnail_url} onClick={() => props.onClick(index)} />
              </div>
            </div>

          )
        }
        )}

      </div>
    </div >
  )
}

export default StyleSelector;
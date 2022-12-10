import React, { useState, useEffect } from 'react';
import "../../styles/index.css";


const ImageGallery = (props) => {

  return (
    <div>
      <img id="primary-img" className="maxDimensions" src={props.styles[props.styleIndex]?.photos[0].thumbnail_url}/>
    </div>
  )
}

export default ImageGallery;
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import SpecificImage from './SpecificImage.jsx';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiOutlinePlus } from 'react-icons/ai';

import "../../styles/index.css";



const ImageGallery = (props) => {

  const [primaryImageIndex, setPrimaryImageIndex] = useState(0);

  const leftClicked = () => {
    setPrimaryImageIndex(primaryImageIndex - 1);
  }

  const rightClicked = () => {
    setPrimaryImageIndex(primaryImageIndex + 1);
  }
  // if (props.photos && props.chosenStyle) {
    return (
      <div>
        <div id="main-img">
          {primaryImageIndex === 0
            ? null
            : <AiOutlinePlus onClick={() => leftClicked()} />
          }
          {primaryImageIndex === props.styles[props.styleIndex]?.photos.length - 1
            ? null
             : 
             <AiOutlinePlus onClick={() => rightClicked()} />
            }
      <img id="primary-img" className="maxDimensions" src={props.styles[props.styleIndex]?.photos[primaryImageIndex].thumbnail_url} 
      onClick={() => { props.setExpandedView(true); props.setPrimaryImageIndex(primaryImageIndex); }}/>

        </div>
      </div>
    )
  } 
  // else {
  //   return null;
  // }
// };

export default ImageGallery;
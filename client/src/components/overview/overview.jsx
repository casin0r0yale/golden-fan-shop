import React, { useState, useEffect, Suspense } from 'react';
import "../../styles/index.css";
import AddToCart from './addToCart.jsx';
const ImageGallery = React.lazy(() => import('./imageGallery.jsx'));
import ProductInfo from './productInfo.jsx';
import StyleSelector from './styleSelector.jsx';
import ExpandedView from './expandedView.jsx'
const Spinner = require('../../img/spiffygif_46x46.gif');

const Overview = (props) => {
  // console.log('overview', props.info);
  const [styleIndex, setStyleIndex] = useState(0);
  const setIndex = (index) => {
    // console.log(index);
    setStyleIndex(index);
  }
  const [expandedView, setExpandedView] = useState(false);
  const [primaryImageIndex, setPrimaryImageIndex] = useState(0);



  useEffect(() => {
    setStyleIndex(0);
  }, [props.info]);



  return (
    <div widgetname="Overview" data-testid='testOverview'>
      {!props.serverError ?
          expandedView ?
            <div widgetname="Overview" className="expandedView"><ExpandedView setExpandedView={setExpandedView} primaryImageIndex={primaryImageIndex} setPrimaryImageIndex={setPrimaryImageIndex} styleIndex={styleIndex} styles={props.styles} />
            </div>
            :
        <div widgetname="Overview" className="overviewContainer">
              <div widgetname="Overview" className="productInfo"><ProductInfo rating={props.rating} info={props.info} onClickYourOutfit={props.onClickYourOutfit} /></div>
              <div widgetname="Overview" className="styleSelector"><StyleSelector onClick={setIndex} styleIndex={styleIndex} styles={props.styles} /></div>
              <div widgetname="Overview" className="addToCart"><AddToCart onClickAddToCart={props.onClickAddToCart} styleIndex={styleIndex} styles={props.styles} /></div>
              <div widgetname="Overview" className="imageGallery">
              <Suspense fallback={<img src={Spinner} alt={Spinner}/>}>
                <ImageGallery setExpandedView={setExpandedView} primaryImageIndex={primaryImageIndex} setPrimaryImageIndex={setPrimaryImageIndex} styleIndex={styleIndex} styles={props.styles} />
              </Suspense>
              </div>
            </div>
        : <h2 style={{marginTop: "4em"}}>We have encountered an error with our backend server! Please try refreshing in a moment!</h2>
      }
      </div>
      )
}

      export default Overview;

import React, { useState, useEffect, useContext } from 'react';
import ProductRating from '../reviews/ProductRating.jsx';
import "../../styles/index.css";
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';


const ProductInfo = (props) => {
  // console.log('general info', props.info);
  const [favorited, setFavorited] = useState(false);

  const onClickYourOutfit = () => {
    props.onClickYourOutfit();
    setFavorited(true);
  }
  const onMouseUpHandler = () => {
    setFavorited(false);
  }

  return (
    <div widgetname="Overview" className="productInfo">
      <ProductRating rating={props.rating} widgetname="Overview"/>
      <p widgetname="Overview" >CATEGORY</p>
      <div widgetname="Overview" style={{display: 'flex',  alignItems: 'top'}}>
        <h1 widgetname="Overview" >{props.info.name}</h1>
        <div widgetname="Overview" style={{marginTop:"1em"}}  onMouseUp={onMouseUpHandler} onMouseOut={onMouseUpHandler} onMouseDown={onClickYourOutfit} id="hearted" >{favorited ? <AiFillHeart size="26"/> : <AiOutlineHeart size="26"/>} </div>
      </div>
    </div>
  )
}


export default ProductInfo;
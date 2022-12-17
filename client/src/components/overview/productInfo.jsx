import React, { useState, useEffect, useContext } from 'react';
import ProductRating from '../reviews/ProductRating.jsx';
import "../../styles/index.css";
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { ModuleNameContext } from "../../hooks/contextModuleName.jsx";




const ProductInfo = (props) => {
  // console.log('general info', props.info);
  const [favorited, setFavorited] = useState(false);

  const moduleName = useContext(ModuleNameContext);
// !!!

  const onClickYourOutfit = () => {
    props.onClickYourOutfit();
    setFavorited(true);
  }
  const onMouseUpHandler = () => {
    setFavorited(false);
  }

  return (
    <div moduleName="Overview" className="productInfo">
      <ProductRating rating={props.rating} moduleName="Overview"/>
      <p moduleName="Overview" >CATEGORY</p>
      <div moduleName="Overview" style={{display: 'flex',  alignItems: 'top'}}>
        <h1 moduleName="Overview" >{props.info.name}</h1>
        <div moduleName="Overview" style={{marginTop:"1em"}}  onMouseUp={onMouseUpHandler} onMouseOut={onMouseUpHandler} onMouseDown={onClickYourOutfit} id="hearted" >{favorited ? <AiFillHeart size="26"/> : <AiOutlineHeart size="26"/>} </div>
      </div>
    </div>
  )
}


export default ProductInfo;
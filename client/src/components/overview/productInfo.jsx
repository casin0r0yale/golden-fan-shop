import React, { useState, useEffect } from 'react';
import ProductRating from '../reviews/ProductRating.jsx';
import "../../styles/index.css";
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';



const ProductInfo = (props) => {
  // console.log('general info', props.info);
  const [favorited, setFavorited] = useState(false);

  const onClickYourOutfit = () => {
    props.onClickYourOutfit();
    setFavorited(!favorited);
  }




  return (
    <div data-testid='testProductInfo' className="productInfo">
      <div style={{ display: "flex" }}><ProductRating rating={props.rating} /><a class="hyperlink" href="#reviews" style={{ marginBottom: "1.25em", marginLeft: "1em"}}>Read all reviews</a></div>
      <p>CATEGORY</p>
      <div style={{ display: 'flex', alignItems: 'top' }}>
        <h1>{props.info.name}</h1>
        <div style={{ marginTop: "1em" }} onClick={onClickYourOutfit} id="hearted" >{favorited ? <AiFillHeart size="26" /> : <AiOutlineHeart size="26" />} </div>
      </div>
    </div>
  )
}



export default ProductInfo;
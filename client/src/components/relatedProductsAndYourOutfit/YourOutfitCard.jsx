import React, {useState, useEffect} from 'react';

const YourOutfitCard = (props) => {

  var onClickDeleteProduct = () => {
    props.onClickDeleteProductYourOutfit(props.current_id);
  }

  var onClickNavigate = () => {
    props.onClickNavigateToNewProductPage(props.current_id);
  }

  return (
    <div className='productCard' onClick={onClickNavigate}>
      <div>
        <img src={props.current_thumbnail}/>
      </div>
      <div></div>
      <div>{props.current_category}</div>
      <div>{props.current_name}</div>
      <div>{props.current_price}</div>
      <div>TODO: Stars/Reviews</div>
      <button onClick={onClickDeleteProduct} class="close-icon-yourOutfit">x</button>
    </div>
  )
}

export default YourOutfitCard;

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
        <img className='productImageInCard' src={props.current_thumbnail}/>
      </div>
      <div></div>
      <div>
        <div style={{fontSize: 12}} className='lineSpaceCard'>{props.current_category.toUpperCase()}</div>
        <div className='boldFont lineSpaceCard'>{props.current_name}</div>
        <div style={{fontSize: 12}} className='lineSpaceCard'>${props.current_price}</div>
        <div className='lineSpaceCard'>TODO: Stars/Reviews</div>
      </div>
      <button onClick={onClickDeleteProduct} class="close-icon-yourOutfit"><div className='x-icon'></div></button>
    </div>
  )
}

export default YourOutfitCard;

import React, {useState, useEffect} from 'react';

const AddToOutfitCard = (props) => {


  var onClickYourOutfit = () => {

    props.onClickYourOutfit();

  }

  return (
    <div className='productCard compareMiddleColumn'>
      <div>
        Add To Outfit
      </div>
      <button onClick={onClickYourOutfit}>
        +
      </button>
    </div>
  )
}

export default AddToOutfitCard;

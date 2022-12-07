import React, {useState, useEffect} from 'react';

const AddToOutfitCard = (props) => {


  var onClickYourOutfit = () => {

    props.onClickYourOutfit();

  }

  return (
    <div className='productCard addToOutfitButton'>
      <div className='addToOutfitText'>
        Add To Outfit
      </div><br/>
      <button className='button-add-to-outfit' onClick={onClickYourOutfit}>
        +
      </button>
    </div>
  )
}

export default AddToOutfitCard;

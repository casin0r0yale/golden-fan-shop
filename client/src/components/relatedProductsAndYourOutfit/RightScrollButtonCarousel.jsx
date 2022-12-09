import React, {useState, useEffect} from 'react';

const RightScrollButtonCarousel = (props) => {

  var onClickScrollRight = () => {
    props.moveRight();
    console.log('clicked right!');
  }

  return (
    <div className='rightScrollButtonPosition' data-testid='testRightScrollButton'>
      <button className='rightScrollButton' onClick={onClickScrollRight}>
        <div className='right-icon'></div>
      </button>
    </div>
  )
}

export default RightScrollButtonCarousel;

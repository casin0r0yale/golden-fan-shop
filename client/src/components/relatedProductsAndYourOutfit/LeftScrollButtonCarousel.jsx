import React, {useState, useEffect} from 'react';

const LeftScrollButtonCarousel = (props) => {

  var onClickScrollLeft = () => {
    props.moveLeft();
    console.log('clicked left!');
  }

  return (
    <div className="leftScrollButtonPosition">
      <button className='leftScrollButton' onClick={onClickScrollLeft}>
        <div className='left-icon'></div>
      </button>
    </div>
  )
}

export default LeftScrollButtonCarousel;

import React, {useState, useEffect} from 'react';
import Overview from './overview.jsx';
import Reviews from './Reviews.jsx';

const Component = (props) => {

  return (
    <div>
      <div>Component Test</div>
      <Overview/>
      <Reviews/>
    </div>
  )
}

export default Component;

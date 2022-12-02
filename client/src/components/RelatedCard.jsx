import React, {useState, useEffect} from 'react';

const RelatedCard = (props) => {

  // {props.related_id} also can passed in

  return (
    <div className='productCard'>
      <div>
        <img src={props.related_thumbnail}/>
      </div>
      <div>TODO: Action Button</div>
      <div>{props.related_category}</div>
      <div>{props.related_name}</div>
      <div>{props.related_price}</div>
      <div>TODO: Stars/Reviews</div>
    </div>
  )
}

export default RelatedCard;

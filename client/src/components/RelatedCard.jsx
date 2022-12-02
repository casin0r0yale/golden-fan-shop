import React, {useState, useEffect} from 'react';
import Popup from './Popup.jsx';
import ComparisonTable from './ComparisonTable.jsx';

const RelatedCard = (props) => {

  // {props.related_id} also is passed in

  // Will need to pass in feature and value into the comparison model component
  const [formView, setFormView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

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
      <button onClick={togglePopup} src="..../images/Star Transparent.png" class="starbutton"></button>
      {isOpen && <Popup
      content={<>
        <ComparisonTable/>
        </>}
      handleClose={togglePopup}
      />}
    </div>
  )
}

export default RelatedCard;

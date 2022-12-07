import React, {useState, useEffect} from 'react';
import Popup from '../Popup.jsx';
import ComparisonTable from './ComparisonTable.jsx';

const RelatedCard = React.forwardRef((props, ref) => {

  // {props.related_id} also is passed in

  // Will need to pass in feature and value into the comparison model component
  const [formView, setFormView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  }

  // var relatedCardRef = React.createRef();

  useEffect(() => {
    // console.log("🚀 ~ file: RelatedCard.jsx:19 ~ RelatedCard ~ relatedCardRef", relatedCardRef)

    // props.gatherRefsRelated(relatedCardRef.current)
  }, [])

  var combineRelatedFeatures = [];

  // Object entries/values (look into)
  for( var key in props) {
    if (key.length === 1) {
      combineRelatedFeatures.push(props[key]);
    }
  }

  var onClickNavigate = () => {
    props.onClickNavigateToNewProductPage(props.related_id);
  }


  return (
    <div className='productCard' onClick={onClickNavigate} ref={ref}>
      {isOpen && <Popup
      content={<>
        <ComparisonTable related_name={props.related_name} featuresPrimaryProductString={props.featuresPrimaryProductString} featuresRelatedProductString={JSON.stringify(combineRelatedFeatures)}/>
        </>}
      handleClose={togglePopup}
      />}
      <button id="star-button-compare" onClick={togglePopup} className="star">
        {/* <span className="star">&#9733;</span> */}
        &#9733;
      </button>
      <div>
        <img className='productImageInCard' src={props.related_thumbnail}/>
      </div>

      <div>
        <div style={{fontSize: 12}} className='lineSpaceCard'>{props.related_category.toUpperCase()}</div>
        <div className='boldFont lineSpaceCard'>{props.related_name}</div>
        <div style={{fontSize: 12}} className='lineSpaceCard'>${props.related_price}</div>
        <div className='lineSpaceCard'>TODO: Stars/Reviews</div>
      </div>
    </div>
  )
});

export default RelatedCard;

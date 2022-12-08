import React, {useState, useEffect} from 'react';
import Popup from '../Popup.jsx';
import ComparisonTable from './ComparisonTable.jsx';

const RelatedCard = React.forwardRef((props, ref) => {

  // {props.related_id} also is passed in
  const [formView, setFormView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(true);

  const togglePopup = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  }

  // useEffect(() => {
  //   // console.log("🚀 ~ file: RelatedCard.jsx:19 ~ RelatedCard ~ relatedCardRef", relatedCardRef)

  //   // props.gatherRefsRelated(relatedCardRef.current)
  // }, [])

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

  const hideImgWhenError = (e) => {
    console.log("🚀 ~ file: RelatedCard.jsx:37 ~ hideImgWhenError ~ e", e)
    if(imgError) {
      setImgError(false);
      e.target.src = 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80';
    };
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
        &#9733;
      </button>
      <div>
        <img className='productImageInCard' src={props.related_thumbnail ? props.related_thumbnail : 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609'}/>
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

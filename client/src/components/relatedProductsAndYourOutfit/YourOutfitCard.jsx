import React, {useState, useEffect} from 'react';
import ProductRating from '../reviews/ProductRating.jsx';
import axios from 'axios';
import getAverageRating from '../../index.jsx';

const YourOutfitCard = React.forwardRef((props, ref) => {

  const [ratingYourOutfitCard, setRatingYourOutfitCard] = useState(0);

  useEffect(() => {
    axios.get('/getProductReviews', { params: { id: props.current_id } })
    .then(function (response) {
      var reviews = response.data.results;
      var average = getAverageRating(reviews);
      setRatingYourOutfitCard(average);
    })
    .catch(function (error) {
    })
  }, []);

  var onClickDeleteProduct = (event) => {
    event.stopPropagation();
    props.onClickDeleteProductYourOutfit(props.current_id);
  }

  var onClickNavigate = () => {
    props.onClickNavigateToNewProductPage(props.current_id);
  }

  return (
    <div className='productCard' onClick={onClickNavigate} ref={ref}>
      <div>
        <img className='productImageInCard' src={props.current_thumbnail ? props.current_thumbnail : 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609'}/>
      </div>
      <div></div>
      <div>
        <div style={{fontSize: 12}} className='lineSpaceCard'>{props.current_category.toUpperCase()}</div>
        <div className='boldFont lineSpaceCard'>{props.current_name}</div>
        <div style={{fontSize: 12}} className='lineSpaceCard'>${props.current_price}</div>
        <div className='lineSpaceCard'>
          <ProductRating rating={ratingYourOutfitCard}/>
        </div>
      </div>
      <button onClick={onClickDeleteProduct} class="close-icon-yourOutfit"><div className='x-icon'></div></button>
    </div>
  )
});

export default YourOutfitCard;

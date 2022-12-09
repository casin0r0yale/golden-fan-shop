import React, {useEffect, useState} from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import sinon from 'sinon';
import { spy } from 'sinon';
// import Reviews from './client/src/components/reviews/Reviews.jsx';
// import App from '../client/src/App.jsx';
// import ProductInfo from './client/src/components/overview/productInfo.jsx';
// import YourOutfitCard from './client/src/components/relatedProductsAndYourOutfit/YourOutfitCard.jsx';
import YourOutfitCard from '../client/src/components/relatedProductsAndYourOutfit/YourOutfitCard.jsx';
import LeftScrollButtonCarousel from '../client/src/components/relatedProductsAndYourOutfit/LeftScrollButtonCarousel.jsx';
import RightScrollButtonCarousel from '../client/src/components/relatedProductsAndYourOutfit/RightScrollButtonCarousel.jsx';

test('should render Left ScrollButtonCarousel', () => {

  render(<LeftScrollButtonCarousel />);
      const testIdInYourOutfitCard = screen.getByTestId('testLeftScrollButton');
      expect(testIdInYourOutfitCard).toBeInTheDocument()
})

test('should render Right ScrollButtonCarousel', () => {
  render(<RightScrollButtonCarousel />);
      const testIdInYourOutfitCard = screen.getByTestId('testRightScrollButton');
      expect(testIdInYourOutfitCard).toBeInTheDocument()
})

test('should render Your Outfit Product Card with props', () => {


  var onClickNavigateToNewProductPage = () => {
    return;
  }
  var onClickDeleteProductYourOutfit = () => {
    return;
  }

  let itemObj= {
    current_name: 'asdf',
    current_id: 134,
    current_category: 'shoes',
    current_price: 100,
    current_thumbnail: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
  }

  render(<YourOutfitCard  onClickNavigateToNewProductPage={onClickNavigateToNewProductPage} current_name={itemObj.current_name} current_id={itemObj.current_id}
    current_category={itemObj.current_category} current_price={itemObj.current_price}
    current_thumbnail={itemObj.current_thumbnail} onClickDeleteProductYourOutfit={onClickDeleteProductYourOutfit}
    key={`slide-${itemObj.current_id}`}
    ref={null}/>);

    const testIdInYourOutfitCard = screen.getByTestId('testYourOutfitCard');

    expect(testIdInYourOutfitCard).toBeInTheDocument()
})

// test('should render Main App component', () => {
//   render(<App/>);
//       const testIdInYourOutfitCard = screen.getByTestId('testYourOutfitCard');
//       expect(testIdInYourOutfitCard).toBeInTheDocument()
// })



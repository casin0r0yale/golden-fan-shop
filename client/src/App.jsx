import React, { useEffect, useState, useRef } from "react";
import ReactDOM from 'react-dom';
import Overview from './components/overview/overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import RelatedCard from './components/relatedProductsAndYourOutfit/RelatedCard.jsx';
import AddToOutfitCard from './components/relatedProductsAndYourOutfit/AddToOutfitCard.jsx';
import YourOutfitCard from './components/relatedProductsAndYourOutfit/YourOutfitCard.jsx';
import LeftScrollButtonCarousel from './components/relatedProductsAndYourOutfit/LeftScrollButtonCarousel.jsx';
import RightScrollButtonCarousel from './components/relatedProductsAndYourOutfit/RightScrollButtonCarousel.jsx';
import Header from "./components/Header.jsx";
import Questions from './components/Q&A/Questions.jsx';
import axios from 'axios';

const App = () => {

  const [focusProductId, setFocusProductId] = useState(71704);
  const [featuresPrimaryProduct, setFeaturesPrimaryProduct] = useState('');
  const [productStyles, setProductStyles] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [productQnAData, setProductQnAData] = useState([]);
  const [currentProductOutfitCard, setCurrentProductOutfitCard] = useState({});
  const [reviewList, setReviewList] = useState([]);
  const [rating, setRating] = useState(0);

  const {moveRight, moveLeft, handleSideScroll, relatedCarourselRef, activeSlide,
    activeSlideRef, prevSlideRef, nextSlideRef, wrapperRef, scrollRelatedProgress, scrollToggleRelatedProgress,
    scrollYourOutfitProgress, scrollToggleYourOutfitProgress, relatedProductsData, setRelatedProductsData,
    yourOutfitList, setYourOutfitList, moveRight2, moveLeft2, handleSideScroll2, yourOutfitCarourselRef, activeSlide2,
    activeSlideRef2, prevSlideRef2, nextSlideRef2, wrapperRef2, onceNext2, onceNext} = useCarouselSliderLogic();

  // Init GET Request
  useEffect(() => {
    getData();
  }, [focusProductId])

  const updateReviewList = (newReviewList) => {
    setReviewList(newReviewList);
    console.log('this is the newReviewList: ', newReviewList);
    console.log('this is the reviewList state: ', reviewList);
  }

  var currentProductCardData = {};

  var getData = () => {

    // INIT GET 1: GET Genral Data of target product
    axios.get('/getProductGeneralInfo', { params: { id: focusProductId } })
    .then(function (response) {
      setProductInfo(response.data);
      var generalProductInfo = response.data;
      var featuresArrayToChangeKey = generalProductInfo.features;
      var primaryName = generalProductInfo.name;

      currentProductCardData['current_name'] = generalProductInfo.name;
      currentProductCardData.current_category = generalProductInfo.category;
      currentProductCardData.current_price = generalProductInfo.default_price;
      currentProductCardData.current_id = generalProductInfo.id;
      currentProductCardData.current_features = generalProductInfo.features;

      setCurrentProductOutfitCard(currentProductOutfitCard => ({
        ...currentProductCardData
      }));

      (async () => {
        const myAsyncChangeKey = async (obj) => {
          // Richard Edge Case TODO: in case no features or value keys
            obj['featurePrimary'] = obj['feature'];
            delete obj['feature'];
            obj['valuePrimary'] = obj['value'];
            delete obj['value'];
            obj['namePrimary'] = primaryName;
            return obj;
          };
        const tasks = featuresArrayToChangeKey.map(objOfFeatures => myAsyncChangeKey(objOfFeatures))
        try {
          const primaryFeatures = await Promise.all(tasks);
          setFeaturesPrimaryProduct(JSON.stringify(primaryFeatures));
        } catch (err) {
          console.error(err)
        }
      })()

    })
    .catch(function (error) {
      console.log('error GET GeneralInfo: ', error);
    })


    // INIT GET 2: GET Product Styles
    axios.get('/getProductStyles', { params: { id: focusProductId } })
    .then(function (response) {
      setProductStyles(response.data.results);
      // Getting Photo URL of current Product and saving it
      var allStylesArray = response.data.results;
      for (var i = 0 ; i < allStylesArray.length; i++) {
        var currentStyleObj = allStylesArray[i];
        if (currentStyleObj['default?'] === true) {
          var photoUrl = currentStyleObj.photos[0].thumbnail_url;
          currentProductCardData.current_thumbnail = photoUrl;
        }
        if (i === allStylesArray.length - 1) {
          var photoUrl = allStylesArray[0].photos[0].thumbnail_url;
          currentProductCardData.current_thumbnail = photoUrl;
        }
      }
      setCurrentProductOutfitCard(currentProductOutfitCard => ({
        ...currentProductCardData
      }));

    })
    .catch(function (error) {
      console.log('error GET ProductStyles: ', error);
    })

    // INIT GET 3: GET Related Products (Richard's section to manipulate)
    useRelatedProductLogic (focusProductId, setRelatedProductsData);

    // INIT GET 4: GET Product REVIEWS data (Tony's section to manipulate)
    axios.get('/getProductReviews', { params: { id: focusProductId } })
      .then(function (response) {
        console.log('CHAIN 4: Tony Module - SUCCESS GET PRODUCT REVIEWS DATA: ', response.data);
        // TODO: Manipulate and pass down response.data into module...
        var reviews = response.data.results;
        setReviewList(reviews);
        var average = getAverageRating(reviews);
        setRating(average);
      })
      .catch(function (error) {
        console.log('error GET Reviews Data: ', error);
      })

    // INIT GET 5: GET Product Q&A data (Ste'fan's section to manipulate)
    axios.get('/getProductQnA', { params: { id: focusProductId } })
      .then(function (response) {
        console.log('CHAIN 5: Stefan Module - SUCCESS GET PRODUCT Q&A DATA: ', response.data);
        // TODO: Manipulate and pass down response.data into module...
        //setProductQnAData(response.data);
        var questionData = response.data.results;
        setProductQnAData(questionData);
        console.log('Qna Data: ',questionData);

      })
      .catch(function (error) {
        console.log('error GET QnA Data: ', error);
      })
  }

  var onClickYourOutfit = (data) => {
    for (var i = 0; i < yourOutfitList.length; i++) {
      if (yourOutfitList[i].current_id === currentProductOutfitCard.current_id) {
        return;
      }
    }
    setYourOutfitList( (current) => {
      return [...current, currentProductOutfitCard]
    });
  }

  var onClickDeleteProductYourOutfit = (idToDelete) => {

    yourOutfitList.forEach ((obj, index) => {
      if (obj.current_id === idToDelete) {
        setYourOutfitList([
          ...yourOutfitList.slice(0, index),
          ...yourOutfitList.slice(index + 1, yourOutfitList.length)
        ]);
        }
      })
    }

  var onClickNavigateToNewProductPage = (id) => {
    console.log("NavigateToNewProductPage with id: ", id)
    setFocusProductId(id);
  }

  return (

      <div>
        <Header/>
        <h2 data-testid='testYourOutfitCard'>Golden Fan Shop: Main App/Index Component</h2>
        <Overview rating={rating} info={productInfo} styles={productStyles} onClickYourOutfit={onClickYourOutfit}/>
        <div>RELATED PRODUCTS</div>

        <div className="sidescroller" onScroll={handleSideScroll} ref={relatedCarourselRef}>
          { scrollRelatedProgress > 3.3 ? (<LeftScrollButtonCarousel  moveLeft={moveLeft}/>) : null }
          {relatedProductsData.map((itemObj, index) => {
          return <RelatedCard onClickNavigateToNewProductPage={onClickNavigateToNewProductPage} related_id={itemObj.related_id} related_name={itemObj.related_name}
          related_category={itemObj.related_category} related_price={itemObj.related_price}
          related_thumbnail={itemObj.related_thumbnail} {...itemObj.related_features} featuresPrimaryProductString={featuresPrimaryProduct}
          key={`slide-${itemObj.related_id}`}
          ref={index === activeSlide ? activeSlideRef : index-1===activeSlide ? nextSlideRef : index+1===activeSlide ? prevSlideRef : null}/>
          })}
          { scrollToggleRelatedProgress && scrollRelatedProgress<100 && <RightScrollButtonCarousel moveRight={moveRight}/>}
        </div>
        <br/>
        <br/>
        <div>YOUR OUTFIT</div>
        <div className="sidescroller" onScroll={handleSideScroll2} ref={yourOutfitCarourselRef} >
          { scrollYourOutfitProgress > 3.3 ? (<LeftScrollButtonCarousel moveLeft={moveLeft2}/>) : null }
          {yourOutfitList.map((itemObj, index) => {
            return <YourOutfitCard onClickNavigateToNewProductPage={onClickNavigateToNewProductPage} current_name={itemObj.current_name} current_id={itemObj.current_id}
            current_category={itemObj.current_category} current_price={itemObj.current_price}
            current_thumbnail={itemObj.current_thumbnail} onClickDeleteProductYourOutfit={onClickDeleteProductYourOutfit}
            key={`slide-${itemObj.current_id}`}
            ref={index === activeSlide2 ? activeSlideRef2 : index-1===activeSlide2 ? nextSlideRef2 : index+1===activeSlide2 ? prevSlideRef2 : null}/>
          })}
          <AddToOutfitCard onClickYourOutfit={onClickYourOutfit} ref={activeSlide2===yourOutfitList.length-1 ? nextSlideRef2 : null}/>
          { scrollToggleYourOutfitProgress && scrollYourOutfitProgress<100 && <RightScrollButtonCarousel moveRight={moveRight2}l/>}
        </div>
        <Questions data={productQnAData}/>
        <Reviews rating={rating} reviewList={reviewList} product={productInfo} updateReviewList={updateReviewList}/>
      </div>
  );
};

function useRelatedProductLogic (focusID, setRelated) {
  // INIT GET 3: GET Related Products (Richard's section to manipulate)
  axios.get('/getProductRelated', { params: { id: focusID } })
  .then(function (response) {

    console.log('CHAIN 3: Richard Module - SUCCESS GET RELATED PRODUCTS: ', response.data);
    var relatedProductData = response.data;
    var relatedAllData = [];

    (async () => {
      const myAsyncGetRelatedData = async (relatedId) => {
        var relatedObj = {};
        relatedObj.related_id = relatedId;

        // Related Chain 3.1
        return axios.get('/getProductGeneralInfo', { params: { id: relatedId } })
        .then(function (response) {

          relatedObj.related_name = response.data.name;
          relatedObj.related_category = response.data.category;
          relatedObj.related_price = response.data.default_price;
          relatedObj.related_features = response.data.features;

          // Related Chain 3.2
          return axios.get('/getProductStyles', { params: { id: relatedId } })
            .then(function (response) {
              var allStylesArray = response.data.results;
              for (var i = 0 ; i < allStylesArray.length; i++) {
                var currentStyleObj = allStylesArray[i];
                if (currentStyleObj['default?'] === true) {
                  var photoUrl = currentStyleObj.photos[0].thumbnail_url;
                  relatedObj.related_thumbnail = photoUrl;
                  return relatedObj;
                }
                if (i === allStylesArray.length - 1) {
                  var photoUrl = allStylesArray[0].photos[0].thumbnail_url;
                  relatedObj.related_thumbnail = photoUrl;
                  return relatedObj;
                }
              }

              // Related Chain 3.3 TODO
              // Got all data besides for star data TODO

            })
            .catch(function (error) {
              console.log('error GET inner RelatedProducts: ', error);
            })
        })
        .catch(function (error) {
          console.log('error GET inner RelatedProducts: ', error);
        })
      }
      const tasks = relatedProductData.map(id => myAsyncGetRelatedData(id))
      try {
        const results = await Promise.all(tasks);
        setRelated(results);
      } catch (err) {
        console.error(err)
      }
    })()
  })
  .catch(function (error) {
    console.log('error GET RelatedProducts: ', error);
  })
};

function useCarouselSliderLogic () {
  // Main data
  const [relatedProductsData, setRelatedProductsData] = useState([]);
  const [yourOutfitList, setYourOutfitList] = useState([]);
  // First Caroursel
  const [activeSlide, setActiveSlide] = useState(0);
  const [arrowClicked, setArrowClicked] = useState(false);
  const [onceNext, setOnceNext] = useState(false);
  const [oncePrev, setOncePrev] = useState(false);
  const [scrollRelatedProgress, setScrollRelatedProgress] = useState(0);
  const [scrollToggleRelatedProgress, setScrollToggleRelatedProgress] = useState(false);
  var relatedCarourselRef = React.createRef();
  const activeSlideRef = useRef(null);
  const prevSlideRef = useRef(null);
  const nextSlideRef = useRef(null);
  const wrapperRef = useRef(null);
  const firstRenderRef = useRef(true);
  // Second Carousel
  const [activeSlide2, setActiveSlide2] = useState(0);
  const [arrowClicked2, setArrowClicked2] = useState(false);
  const [onceNext2, setOnceNext2] = useState(false);
  const [oncePrev2, setOncePrev2] = useState(false);
  const [scrollYourOutfitProgress, setScrollYourOutfitRelatedProgress] = useState(0);
  const [scrollToggleYourOutfitProgress, setScrollToggleYourOutfitRelatedProgress] = useState(false);
  var yourOutfitCarourselRef = React.createRef();
  const activeSlideRef2 = useRef(null);
  const prevSlideRef2 = useRef(null);
  const nextSlideRef2 = useRef(null);
  const wrapperRef2 = useRef(null);
  const firstRenderRef2 = useRef(true);

  // Related 1
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else if (activeSlideRef.current && arrowClicked && oncePrev) {
      relatedCarourselRef.current.removeEventListener('scroll', handleSideScroll);
      activeSlideRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setOnceNext(false);
      setOncePrev(false);
      return;
    } else if (activeSlideRef.current && nextSlideRef.current && arrowClicked && onceNext) {
      relatedCarourselRef.current.removeEventListener('scroll', handleSideScroll);
      activeSlideRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setOnceNext(false);
      setOncePrev(false);
      return;
    } else if (activeSlideRef.current && !arrowClicked) {
      relatedCarourselRef.current.removeEventListener('scroll', handleSideScroll);
      activeSlideRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  }, [activeSlide]);

  // yourOutfit 2
  useEffect(() => {
    if (firstRenderRef2.current) {
      firstRenderRef2.current = false;
    } else if (activeSlideRef2.current && arrowClicked2 && oncePrev2) {
      yourOutfitCarourselRef.current.removeEventListener('scroll', handleSideScroll);
      activeSlideRef2.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setOnceNext2(false);
      setOncePrev2(false);
      return;
    } else if (activeSlideRef2.current && nextSlideRef2.current && arrowClicked2 && onceNext2) {
      yourOutfitCarourselRef.current.removeEventListener('scroll', handleSideScroll);
      activeSlideRef2.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setOnceNext2(false);
      setOncePrev2(false);
      return;
    } else if (activeSlideRef2.current && !arrowClicked2) {
      yourOutfitCarourselRef.current.removeEventListener('scroll', handleSideScroll);
      activeSlideRef2.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  }, [activeSlide2]);

  // Related 1

  useEffect(() => {
    if (relatedCarourselRef.current) {
      relatedCarourselRef.current.addEventListener('scroll', relatedProductsScrollListener);
      noScrollCheck();
      return () => relatedCarourselRef.current && relatedCarourselRef.current.removeEventListener('scroll', relatedProductsScrollListener);
    }
  });

  // yourOutfit 2
  useEffect(() => {
    if (yourOutfitCarourselRef.current) {
      yourOutfitCarourselRef.current.addEventListener('scroll', yourOutfitScrollListener);
      noScrollCheck2();
      return () => yourOutfitCarourselRef.current && yourOutfitCarourselRef.current.removeEventListener('scroll', yourOutfitScrollListener);
    }
  });

  var relatedProductsScrollListener = () => {
    if (!relatedCarourselRef.current) {
      return;
    }
    const element = relatedCarourselRef.current;
    const windowScroll = element.scrollLeft;
    const totalWidth = element.scrollWidth - element.clientWidth;
    if (windowScroll === 0) {
      return setScrollRelatedProgress(0);
    }
    if (windowScroll > totalWidth) {
      return setScrollRelatedProgress(100);
    }
    setScrollRelatedProgress((windowScroll / totalWidth) * 100);
  }

  var yourOutfitScrollListener = () => {
    if (!yourOutfitCarourselRef.current) {
      return;
    }
    const element = yourOutfitCarourselRef.current;
    const windowScroll = element.scrollLeft;
    const totalWidth = element.scrollWidth - element.clientWidth;
    if (windowScroll === 0) {
      return setScrollYourOutfitRelatedProgress(0);
    }
    if (windowScroll > totalWidth) {
      return setScrollYourOutfitRelatedProgress(100);
    }
    setScrollYourOutfitRelatedProgress((windowScroll / totalWidth) * 100);
  }

  var noScrollCheck = () => {
    if (!relatedCarourselRef.current) {
      return;
    }
    const element = relatedCarourselRef.current;
    const windowScroll = element.scrollLeft;
    const totalWidth = element.scrollWidth - element.clientWidth;

    if (windowScroll < totalWidth) {
      setScrollToggleRelatedProgress(true);
    } else {
      setScrollToggleRelatedProgress(false);
    }
  }
  var noScrollCheck2 = () => {
    if (!yourOutfitCarourselRef.current) {
      return;
    }
    const element = yourOutfitCarourselRef.current;
    const windowScroll = element.scrollLeft;
    const totalWidth = element.scrollWidth - element.clientWidth;

    if (windowScroll < totalWidth) {
      setScrollToggleYourOutfitRelatedProgress(true);
    } else {
      setScrollToggleYourOutfitRelatedProgress(false);
    }
  }

  // Related Carousel
  const moveRight = () => {
    setArrowClicked(true);
    setOnceNext(true);

    if (activeSlide + 1 >= relatedProductsData.length) {
      return setActiveSlide(relatedProductsData.length - 1);
    }
    return setActiveSlide(activeSlide + 1);
  };

  const moveLeft = () => {
    setArrowClicked(true);
    setOncePrev(true);
    if (activeSlide - 1 <= 0) {
      return setActiveSlide(0);
    }
    return setActiveSlide(activeSlide - 1);
  };

  // Your Outfit Carousel
  const moveRight2 = () => {
    setArrowClicked2(true);
    setOnceNext2(true);

    if (activeSlide2 + 1 >= yourOutfitList.length) {
      return setActiveSlide2(yourOutfitList.length - 1);
    }
    return setActiveSlide2(activeSlide2 + 1);
  };

  const moveLeft2 = () => {
    setArrowClicked2(true);
    setOncePrev2(true);
    if (activeSlide2 - 1 <= 0) {
      return setActiveSlide2(0);
    }
    return setActiveSlide2(activeSlide2 - 1);
  };

  // Related Carousel
  const handleSideScroll = (e) => {
    let { width } = relatedCarourselRef.current.getBoundingClientRect();
    let { scrollLeft } = relatedCarourselRef.current;
    setActiveSlide(Math.round(scrollLeft / 274));
  };

  // Your Outfit Carousel
  const handleSideScroll2 = (e) => {
    let { width } = yourOutfitCarourselRef.current.getBoundingClientRect();
    let { scrollLeft } = yourOutfitCarourselRef.current;
    setActiveSlide2(Math.round(scrollLeft / 274));
  };

  return {moveRight, moveLeft, handleSideScroll, relatedCarourselRef, activeSlide,
    activeSlideRef, prevSlideRef, nextSlideRef, wrapperRef, scrollRelatedProgress, scrollToggleRelatedProgress,
    scrollYourOutfitProgress, scrollToggleYourOutfitProgress, relatedProductsData, setRelatedProductsData,
    yourOutfitList, setYourOutfitList, moveRight2, moveLeft2, handleSideScroll2, yourOutfitCarourselRef, activeSlide2,
    activeSlideRef2, prevSlideRef2, nextSlideRef2, wrapperRef2, onceNext2, onceNext}
};

const getAverageRating = (reviewList) => {
  var total = 0;
  reviewList.forEach((review) => {
    total += review.rating;
  });
  var average = total / reviewList.length;
  var rounded = Math.round(average * 10) / 10;
  return rounded;
}

export {getAverageRating};
export default App;

// ReactDOM.render(<App/>, document.getElementById('root'))

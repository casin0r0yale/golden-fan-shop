import React, { useEffect, useState, useRef } from "react";
import ReactDOM from 'react-dom';
import Overview from './components/overview/overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import RelatedCard from './components/relatedProductsAndYourOutfit/RelatedCard.jsx';
import AddToOutfitCard from './components/relatedProductsAndYourOutfit/AddToOutfitCard.jsx';
import YourOutfitCard from './components/relatedProductsAndYourOutfit/YourOutfitCard.jsx';
import LeftScrollButtonCarousel from './components/relatedProductsAndYourOutfit/LeftScrollButtonCarousel.jsx';
import RightScrollButtonCarousel from './components/relatedProductsAndYourOutfit/RightScrollButtonCarousel.jsx';
import Questions from './components/Questions.jsx';
import axios from 'axios';

const App = () => {

  // PRIMARY STATE: Setting product ID 71697 as the default detail page to start us off.
  // As the user clicks into a new detail page, this state will change and set off chained GET request for all necessary data
  const [focusProductId, setFocusProductId] = useState(71704);
  const [relatedProductsData, setRelatedProductsData] = useState([]);
  const [featuresPrimaryProduct, setFeaturesPrimaryProduct] = useState('');
  const [productStyles, setProductStyles] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [yourOutfitList, setYourOutfitList] = useState([]);
  const [currentProductOutfitCard, setCurrentProductOutfitCard] = useState({});

  const [scrollRelatedProgress, setScrollRelatedProgress] = useState(0);
  const [scrollYourOutfitProgress, setScrollYourOutfitRelatedProgress] = useState(0);
  const [scrollToggleRelatedProgress, setScrollToggleRelatedProgress] = useState(false);
  const [scrollToggleYourOutfitProgress, setScrollToggleYourOutfitRelatedProgress] = useState(false);

  const [refsRelated, setRefsRelated] = useState([]);
  const [refsRelatedCount, setRefsRelatedCount] = useState(0);

  const [activeSlide, setActiveSlide] = useState(0);
  const [arrowClicked, setArrowClicked] = useState(false);
  const [onceNext, setOnceNext] = useState(false);
  const [oncePrev, setOncePrev] = useState(false);


  // REFS

  var relatedCarourselRef = React.createRef();
  var yourOutfitCarourselRef = React.createRef();
  var relatedRefs = React.createRef();

  const activeSlideRef = useRef(null);
  const prevSlideRef = useRef(null);
  const nextSlideRef = useRef(null);
  const wrapperRef = useRef(null);
  const firstRenderRef = useRef(true);

  // Scrolling Action
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

  useEffect(() => {
    getData();
  }, [focusProductId])

  useEffect(() => {
    relatedCarourselRef.current.addEventListener('scroll', relatedProductsScrollListener);
    noScrollCheck();
    return () => relatedCarourselRef.current && relatedCarourselRef.current.removeEventListener('scroll', relatedProductsScrollListener);
  });

  useEffect(() => {
    yourOutfitCarourselRef.current.addEventListener('scroll', yourOutfitScrollListener);
    noScrollCheck2();
    return () => yourOutfitCarourselRef.current && yourOutfitCarourselRef.current.removeEventListener('scroll', yourOutfitScrollListener);
  });

  var currentProductCardData = {};

  var getData = () => {

    // INIT GET 1: GET Genral Data of target product
    axios.get('/getProductGeneralInfo', { params: { id: focusProductId } })
    .then(function (response) {
      setProductInfo(response.data);
        // need to refactor into controller
      var generalProductInfo = response.data;
      var featuresArrayToChangeKey = generalProductInfo.features;
      var primaryName = generalProductInfo.name;

      currentProductCardData['current_name'] = response.data.name;
      currentProductCardData.current_category = response.data.category;
      currentProductCardData.current_price = response.data.default_price;
      currentProductCardData.current_id = response.data.id;
      currentProductCardData.current_features = response.data.features; //may not need
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
      // console.log("🚀 ~ file: index.jsx:79 ~ response.data.results", response.data.results)

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
    axios.get('/getProductRelated', { params: { id: focusProductId } })
    .then(function (response) {

      console.log('CHAIN 3: Richard Module - SUCCESS GET RELATED PRODUCTS: ', response.data);
      var relatedProductData = response.data;
      var relatedAllData = [];

      (async () => {
        // Sample async function which implicitly returns a Promise since it's marked
        // as async. Could also be a regular function explicitly returning a Promise.
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
        // Create an array of Promises from relatedProductData.
        const tasks = relatedProductData.map(id => myAsyncGetRelatedData(id))

        try {
          const results = await Promise.all(tasks);
          setRelatedProductsData(results);
          // setFeaturesRelatedProduct(JSON.stringify(response.data.features));

        } catch (err) {
          console.error(err)
        }
      })()


    })
    .catch(function (error) {
      console.log('error GET RelatedProducts: ', error);
    })

    // INIT GET 4: GET Product REVIEWS data (Tony's section to manipulate)
    axios.get('/getProductReviews', { params: { id: focusProductId } })
      .then(function (response) {
        console.log('CHAIN 4: Tony Module - SUCCESS GET PRODUCT REVIEWS DATA: ', response.data);
        // TODO: Manipulate and pass down response.data into module...
      })
      .catch(function (error) {
        console.log('error GET Reviews Data: ', error);
      })

    // INIT GET 5: GET Product Q&A data (Ste'fan's section to manipulate)
    axios.get('/getProductQnA', { params: { id: focusProductId } })
      .then(function (response) {
        console.log('CHAIN 5: Stefan Module - SUCCESS GET PRODUCT Q&A DATA: ', response.data);
        // TODO: Manipulate and pass down response.data into module...

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
      // maybe reset state or active card to 0
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
      console.log("🚀 ~ file: index.jsx:289 ~ noScrollCheck ~ totalWidth", totalWidth, 'widnerscroll: ', windowScroll)
      setScrollToggleYourOutfitRelatedProgress(true);
    } else {
      setScrollToggleYourOutfitRelatedProgress(false);
    }
  }

  var onClickScrollRelated = () => {
    console.log('inside onClickScrollRelated')
    relatedRefs.current.scrollIntoView({inline: "nearest", behavior: "smooth" })
  }

  var refsOfRelated = [];

  var gatherRefsRelated = async (ref) => {

    refsOfRelated.push(ref);

    setRefsRelated(refsOfRelated);

  }


  // slide move
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

  const handleSideScroll = (e) => {
    let { width } = relatedCarourselRef.current.getBoundingClientRect();
    let { scrollLeft } = relatedCarourselRef.current;
    setActiveSlide(Math.round(scrollLeft / 274));
  };

  return (

      <div>
        <h2>Golden Fan Shop: Main App/Index Component</h2>
        <Overview info={productInfo} styles={productStyles}/>
        <div>RELATED PRODUCTS</div>

        <div class="sidescroller"
          onScroll={handleSideScroll}
          //
          ref={relatedCarourselRef}>
          { scrollRelatedProgress > 0 ? (<LeftScrollButtonCarousel  moveLeft={moveLeft}/>) : null }

          {relatedProductsData.map((itemObj, index) => {
          return <RelatedCard onClickNavigateToNewProductPage={onClickNavigateToNewProductPage} related_id={itemObj.related_id} related_name={itemObj.related_name}
          related_category={itemObj.related_category} related_price={itemObj.related_price}
          related_thumbnail={itemObj.related_thumbnail} {...itemObj.related_features} featuresPrimaryProductString={featuresPrimaryProduct} gatherRefsRelated={gatherRefsRelated}
          // ref={activeSlideRef}
          key={`slide-${index}`}

          ref={index === activeSlide ? activeSlideRef : index-1===activeSlide ? nextSlideRef : index+1===activeSlide ? prevSlideRef : null}/>
          })}

          { scrollToggleRelatedProgress && scrollRelatedProgress<100 && <RightScrollButtonCarousel moveRight={moveRight}/>}

        </div>
        <br/>
        <br/>
        <div>YOUR OUTFIT</div>
        <div class="sidescroller" ref={yourOutfitCarourselRef}>
          { scrollYourOutfitProgress > 0 ? (<LeftScrollButtonCarousel/>) : null }
          {yourOutfitList.map((itemObj, index) => {
            return <YourOutfitCard onClickNavigateToNewProductPage={onClickNavigateToNewProductPage} key={index} current_name={itemObj.current_name} current_id={itemObj.current_id}
            current_category={itemObj.current_category} current_price={itemObj.current_price}
            current_thumbnail={itemObj.current_thumbnail} onClickDeleteProductYourOutfit={onClickDeleteProductYourOutfit}/>
          })}
          <AddToOutfitCard onClickYourOutfit={onClickYourOutfit}/>
          { scrollToggleYourOutfitProgress && scrollYourOutfitProgress<100 && <RightScrollButtonCarousel/>}
        </div>

        <Questions/>
        <Reviews/>
      </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'))
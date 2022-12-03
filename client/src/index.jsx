import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Overview from './components/overview/overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import RelatedCard from './components/relatedProductsAndYourOutfit/RelatedCard.jsx';
import AddToOutfitCard from './components/relatedProductsAndYourOutfit/AddToOutfitCard.jsx';
import YourOutfitCard from './components/relatedProductsAndYourOutfit/YourOutfitCard.jsx';
import Questions from './components/Questions.jsx';
import axios from 'axios';

const App = () => {

  // PRIMARY STATE: Setting product ID 71697 as the default detail page to start us off.
  // As the user clicks into a new detail page, this state will change and set off chained GET request for all necessary data
  // const [focusProductId, setFocusProductId] = useState(71934);
  const [focusProductId, setFocusProductId] = useState(71697);
  const [relatedProductsData, setRelatedProductsData] = useState([]);
  const [featuresPrimaryProduct, setFeaturesPrimaryProduct] = useState('');
  const [productStyles, setProductStyles] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [yourOutfitList, setYourOutfitList] = useState([]);
  const [currentProductOutfitCard, setCurrentProductOutfitCard] = useState({});

  useEffect(() => {
    getData();
  }, [])

  var currentProductCardData = {};

  var getData = () => {

    // INIT GET 1: GET Genral Data of target product
    axios.get('/getProductGeneralInfo', { params: { id: focusProductId } })
    .then(function (response) {
      setProductInfo(response.data);

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
  console.log("🚀 ~ file: index.jsx:208 ~ onClickDeleteProductYourOutfit ~ idToDelete", idToDelete)

    yourOutfitList.forEach ((obj, index) => {
      console.log("🚀 ~ file: index.jsx:211 ~ yourOutfitList.forEach ~ objcurrent_id", obj.current_id)
      if (obj.current_id === idToDelete) {
        setYourOutfitList([
          ...yourOutfitList.slice(0, index),
          ...yourOutfitList.slice(index + 1, yourOutfitList.length)
        ]);
        }
      })
    }

  return (

      <div>
        <h2>Golden Fan Shop: Main App/Index Component</h2>
        <Overview info={productInfo} styles={productStyles}/>
        <h4>RELATED PRODUCTS</h4>
        <div class="sidescroller">
          {relatedProductsData.map((itemObj, index) => {
          return <RelatedCard key={index} related_id={itemObj.related_id} related_name={itemObj.related_name}
          related_category={itemObj.related_category} related_price={itemObj.related_price}
          related_thumbnail={itemObj.related_thumbnail} {...itemObj.related_features} featuresPrimaryProductString={featuresPrimaryProduct}/>
          })}
        </div>
        <h4>YOUR OUTFIT</h4>
        <div class="sidescroller">
          {yourOutfitList.map((itemObj, index) => {
            return <YourOutfitCard key={index} current_name={itemObj.current_name} current_id={itemObj.current_id}
            current_category={itemObj.current_category} current_price={itemObj.current_price}
            current_thumbnail={itemObj.current_thumbnail} onClickDeleteProductYourOutfit={onClickDeleteProductYourOutfit}/>
          })}
          <AddToOutfitCard onClickYourOutfit={onClickYourOutfit}/>
        </div>

        <Questions/>
        <Reviews/>
      </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Overview from './components/overview.jsx';
import Reviews from './components/Reviews.jsx';
import RelatedCard from './components/RelatedCard.jsx';
import Questions from './components/Questions.jsx';
import axios from 'axios';

const App = () => {

  // PRIMARY STATE: Setting product ID 71697 as the default detail page to start us off.
  // As the user clicks into a new detail page, this state will change and set off chained GET request for all necessary data
  const [focusProductId, changeFocusProductId] = useState(71697);

  useEffect(() => {
    getData();
  }, [])

  // This is chained GET Request to get all necessary information for the focused Product with the ID to render out all the modules.
  // TODO: Still need to chain API from Reviews, Q&A (and cart and interactions?)

  var getData = () => {

    // CHAIN 1: GET Genral Data of target product
    axios.get('/getProductGeneralInfo', { params: { id: focusProductId } })
    .then(function (response) {
      console.log('CHAIN 1: SUCCESS INIT GET PRODUCT ID DATA: ', response.data);

      // Saving this for later use to render on page.
      // Probably need to pass as props into components.
      var generalProductInfo = response.data;

      // CHAIN 2: GET Product Styles
      axios.get('/getProductStyles', { params: { id: focusProductId } })
      .then(function (response) {
        console.log('CHAIN 2: SUCCESS GET PRODUCT STYLE DATA: ', response.data);

        // Again, just saving for passing into components
        var productStyleData = response.data;

        // CHAIN 3: GET Related Products (Richard's section to manipulate)
        axios.get('/getProductRelated', { params: { id: focusProductId } })
        .then(function (response) {
          console.log('CHAIN 3: Richard Module - SUCCESS GET RELATED PRODUCTS: ', response.data);
          var relatedProductData = response.data;

          // Loop through the array of related ids
          relatedProductData.forEach((relatedId) => {

            // TODO: Chain Reviews API Call

            // Related Chain 3.1
            axios.get('/getProductGeneralInfo', { params: { id: relatedId } })
            .then(function (response) {

              var relatedName = response.data.name;
              var relatedCategory = response.data.category;
              var relatedPrice = response.data.default_price;

              // console.log('SUCCESS inner GET RELATED PRODUCTS (name, category and price): ', relatedName, relatedCategory, relatedPrice);

              // Related Chain 3.2
              axios.get('/getProductStyles', { params: { id: relatedId } })
                .then(function (response) {
                  // console.log('SUCCESS inner GET STYLES PRODUCTS (looking for thumbnail): ', response.data);

                  var allStylesArray = response.data.results;

                  allStylesArray.forEach((styleObj) => {
                    // console.log("🚀 ~ file: index.jsx:74 ~ allStylesArray.forEach ~ styleObj", styleObj['default?'])
                    if (styleObj['default?'] === true) {
                      // console.log('styleObj.photos[0]:', styleObj.photos[0])
                    } else {
                      // console.log('ELSE styleObj.photos[0]:', styleObj.photos[0])
                      // TODO interated through array of style objects.....
                    }
                  })
                })
                .catch(function (error) {
                  console.log('error GET inner RelatedProducts: ', error);
                })


            })
            .catch(function (error) {
              console.log('error GET inner RelatedProducts: ', error);
            })
          })


          // CHAIN 4: GET Product REVIEWS data (Tony's section to manipulate)
          axios.get('/getProductReviews', { params: { id: focusProductId } })
            .then(function (response) {
              console.log('CHAIN 4: Tony Module - SUCCESS GET PRODUCT REVIEWS DATA: ', response.data);
              // TODO: Manipulate and pass down response.data into module...


              // CHAIN 5: GET Product Q&A data (Ste'fan's section to manipulate)
              axios.get('/getProductQnA', { params: { id: focusProductId } })
                .then(function (response) {
                  console.log('CHAIN 5: Stefan Module - SUCCESS GET PRODUCT Q&A DATA: ', response.data);
                  // TODO: Manipulate and pass down response.data into module...

                })
                .catch(function (error) {
                  console.log('error GET QnA Data: ', error);
                })


            })
            .catch(function (error) {
              console.log('error GET Reviews Data: ', error);
            })

        })
        .catch(function (error) {
          console.log('error GET RelatedProducts: ', error);
        })

      })
      .catch(function (error) {
        console.log('error GET ProductStyles: ', error);
      })

    })
    .catch(function (error) {
      console.log('error GET GeneralInfo: ', error);
    })
  }

  return (

    <div>
    <h2>Golden Fan Shop: Main App/Index Component</h2>
    <Overview/>
    <RelatedCard/>
    <Questions />
    <Reviews/>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))
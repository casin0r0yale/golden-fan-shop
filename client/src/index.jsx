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
  const [focusProductId, setFocusProductId] = useState(71697);
  const [relatedProductsData, setRelatedProductsData] = useState([]);

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
          var relatedAllData = [];

          // Old Code: Looping through the array of related ids, building out object for each ID to push into above
          // relatedProductData.forEach((relatedId) => {

          //   var relatedObj = {};
          //   relatedObj.related_id = relatedId;

          //   // Related Chain 3.1
          //   axios.get('/getProductGeneralInfo', { params: { id: relatedId } })
          //   .then(function (response) {

          //     relatedObj.related_name = response.data.name;
          //     relatedObj.related_category = response.data.category;
          //     relatedObj.related_price = response.data.default_price;

          //     // Related Chain 3.2
          //     axios.get('/getProductStyles', { params: { id: relatedId } })
          //       .then(function (response) {
          //         // console.log('SUCCESS inner GET STYLES PRODUCTS (looking for thumbnail): ', response.data);
          //         var allStylesArray = response.data.results;
          //         // console.log("🚀 ~ file: index.jsx:67 ~ allStylesArray", allStylesArray)
          //         for (var i = 0 ; i < allStylesArray.length; i++) {
          //           var currentStyleObj = allStylesArray[i];
          //           if (currentStyleObj['default?'] === true) {
          //             var photoUrl = currentStyleObj.photos[0].thumbnail_url;
          //             relatedObj.related_thumbnail = photoUrl;
          //             relatedAllData.push(relatedObj)
          //             break;
          //           }
          //           if (i === allStylesArray.length - 1) {
          //             var photoUrl = allStylesArray[0].photos[0].thumbnail_url;
          //             relatedObj.related_thumbnail = photoUrl;
          //             relatedAllData.push(relatedObj);
          //           }
          //         }


          //         // console.log("🚀🚀 ~ file: index.jsx:84 ~ relatedAllData", relatedAllData);
          //         // setRelatedProductsData(relatedAllData);
          //         // Related Chain 3.3 TODO
          //         // TARGET! Got all data besides for star data TODO

          //       })
          //       .catch(function (error) {
          //         console.log('error GET inner RelatedProducts: ', error);
          //       })
          //   })
          //   .catch(function (error) {
          //     console.log('error GET inner RelatedProducts: ', error);
          //   })
          //   //End of for each loop
          // })

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

            } catch (err) {
              console.error(err)
            }
          })()

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
        <div class="sidescroller">
          {relatedProductsData.map((itemObj, index) => {
          return <RelatedCard key={index} related_id={itemObj.related_id} related_name={itemObj.related_name}
          related_category={itemObj.related_category} related_price={itemObj.related_price}
          related_thumbnail={itemObj.related_thumbnail}/>
          })}
        </div>
        <Questions/>
        <Reviews/>
      </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))
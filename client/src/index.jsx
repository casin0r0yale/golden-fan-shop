import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Overview from './components/overview.jsx';
import Reviews from './components/Reviews.jsx';
import RelatedCard from './components/RelatedCard.jsx';
import axios from 'axios';

const App = () => {

  const [state, changeState] = useState('');

  useEffect(() => {
    getData();
  }, [])

  var getData = () => {

    axios.get('/getProducts')
    .then(function (response) {
      console.log('SUCCESS GET: ', response);
    })
    .catch(function (error) {
      console.log('error GET: ', error);
    })

  }

  return (

      <div>
        <h2>Golden Fan Shop: Main App/Index Component</h2>
        <Overview/>
        <RelatedCard/>
        <div>Questions and Answers Module goes here</div>
        <Reviews/>
      </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Overview from './components/overview.jsx';
import Reviews from './components/Reviews.jsx';
import RelatedCard from './components/RelatedCard.jsx';
import Questions from './components/Questions.jsx';
import axios from 'axios';

const App = () => {

  const [state, changeState] = useState('');

  useEffect(() => {
    getData();
  }, [])

  var getData = () => {

    axios.get('/getQuestions')
    .then(function (response) {
      console.log('SUCCESS GET: ', response.data);
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
    <Questions />
    <Reviews/>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))
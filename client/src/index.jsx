import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Component from './components/Comp1.jsx';
import Questions from './components/Questions.jsx';
=======
import Overview from './components/overview.jsx';
import Reviews from './components/Reviews.jsx';
import RelatedCard from './components/RelatedCard.jsx';
>>>>>>> 39d8d5e9f73f66116cc6cec5e50be2b69e67749c
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
        <h2>Main App Component</h2>
        <Component/>
        <Questions/>
      </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))
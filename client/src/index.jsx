import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Component from './components/Comp1.jsx';
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
      </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))
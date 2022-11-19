import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Component from './components/Comp1.jsx';

const App = () => {

  return (

      <div>
        <h2>Main App Component</h2>
        <Component/>
        <Component/>
      </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))
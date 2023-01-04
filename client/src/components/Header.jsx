import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
// import Logo from '../img/Logo.png'

const Header = () => {

  const refreshPage = () => {
    console.log('refreshed')
    window.location.reload();
  }

  return (
    <div className="header" widgetname="Header">
      <div widgetname="Header" onClick = {refreshPage} className="header-left">
        <img widgetname="Header" className="logo" src={require('../img/Logo.png')} alt="Golden Fan Logo" />
      </div>
      <div widgetname="Header" className="header-right">
        <FaShoppingCart size="25"/>
      </div>
    </div>
  );
};

export default Header;
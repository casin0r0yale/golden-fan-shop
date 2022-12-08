import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
// import Logo from '../img/Logo.png'

const Header = () => {

  const refreshPage = () => {
    console.log('refreshed')
    window.location.reload();
  }

  return (
    <div className="header">
      <div onClick = {refreshPage} className="header-left">
        <img src={require('../img/Logo.png')} alt="Golden Fan Logo" />
      </div>
      <div className="header-right">
        <FaShoppingCart size="25"/>
      </div>
    </div>
  );
};

export default Header;
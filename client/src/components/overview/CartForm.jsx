import React, {useState, useEffect} from 'react';

const CartForm = (props) => {

  const handleDelete = (event) => {
    event.preventDefault();
    alert(`Your cart has been emptied!`)
    props.onClickDeleteCart();
  }

  return (
    <div widgetname="Cart">
      <div className="textCartPopUp">
        Your Cart has {props.cartnumber} {props.cartnumber === 1 ? "item" : "items"}.
        {/* <h2 widgetname="Cart">Your Cart has {props.cartnumber} items.</h2> */}
      </div>
      <br/>
      <div className='buttonCartContain'>
        <button className='button-add-to-outfit buttonCartPopUp' onClick={handleDelete}>
          Empty Shopping Cart
        </button>
      </div>
    </div>
  )
}

export default CartForm;
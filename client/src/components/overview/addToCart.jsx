import React, { useState, useEffect } from 'react';
import "../../styles/index.css";
import { RxCaretDown } from 'react-icons/Rx';
import { AiOutlinePlus } from 'react-icons/ai';





const AddToCart = (props) => {
  const [sizeSelected, setSizeSelected] = useState({});
  const [quantitySelected, setQuantitySelected] = useState('-');

  const [dropdownExpanded, setDropdownExpanded] = useState(false);
  const [quantityDropdownExpanded, setQuantityDropdownExpanded] = useState(false);


  const onOptionSelect = option => {
    setSizeSelected(option);
    setDropdownExpanded(false);
    setQuantitySelected(1);
    console.log(Object.keys(sizeSelected).length > 0)
  };

  const onQuantitySelect = option => {
    setQuantitySelected(option);
    setQuantityDropdownExpanded(false);
  };


  useEffect(() => {
    // console.log('logg', props.styles[props.styleIndex])
    // && Object.keys(props.styles[props.styleIndex]?.skus)?.some(size => {
    //   console.log(props.styles[props.styleIndex]?.skus[size].quantity)
    //   props.styles[props.styleIndex]?.skus[size].quantity > 0
    // }))

    setQuantitySelected('-');
    if (!props.styles[props.styleIndex]?.skus[null])
    // && Object.keys(props.styles[props.styleIndex]?.skus)?.some(size => {
    //   props.styles[props.styleIndex]?.skus[size].quantity > 0
    // }))
    {
      setSizeSelected({});
    }
    else {
      setSizeSelected({ size: "OUT OF STOCK" });
    }

  }, [props.styles]); //

  const addToCart = clicked => {
    console.log('clicked');
    props.onClickYourOutfit();
    // setFavorited(!favorited);
    alert(`${props.styles[props.styleIndex].name} has been added to your cart!`);
  }



  return (
    <div moduleName="Overview" className="addToCart">
      <div moduleName="Overview" className="dropdown">
        <button moduleName="Overview" onClick={() => { setDropdownExpanded(!dropdownExpanded) }} className="dropdown-button">{sizeSelected.size || "SELECT SIZE"}  <RxCaretDown size="20" class="caret" /></button>
        <div moduleName="Overview" className={dropdownExpanded ? "dropdown-content dropdownExpanded" : "dropdown-content"}>
          {Object.keys((props.styles[props.styleIndex]?.skus) || {}).map(size => {
            if (props.styles[props.styleIndex]?.skus[size].quantity > 0) {
              return (<p onClick={() => { onOptionSelect(props.styles[props.styleIndex]?.skus[size]) }}>{props.styles[props.styleIndex]?.skus[size].size}</p>)
            }
          })}
        </div>
      </div>
      <div moduleName="Overview" className="dropdown">
        {!isNaN(quantitySelected) ?
          <div moduleName="Overview"><button moduleName="Overview" className="dropdown-button" id="quantity" onClick={() => { setQuantityDropdownExpanded(!quantityDropdownExpanded) }}>{quantitySelected}<div moduleName="Overview"> <RxCaretDown class="caret" size="20" /></div> </button></div>
          : <button moduleName="Overview" className="dropdown-button" id="quantity">{quantitySelected} <RxCaretDown className="caret" size="20" /></button>}
        <div moduleName="Overview" className={quantityDropdownExpanded ? "dropdown-content dropdownExpanded" : "dropdown-content"}>
          {sizeSelected.quantity > 15 ?
            Array.from(Array(15).keys()).map(quantity => {
              return (<p moduleName="Overview" onClick={() => { onQuantitySelect(quantity + 1) }}>{quantity + 1}</p>)
            })
            : Array.from(Array(sizeSelected.quantity).keys()).map(quantity => {
              return (<p moduleName="Overview" onClick={() => { onQuantitySelect(quantity + 1) }}>{quantity + 1}</p>)
            })}

        </div>
      </div>
      {sizeSelected.quantity > 0 ?
        <button moduleName="Overview" id="checkout" className="dropdown-button" onClick={addToCart} >ADD TO BAG<AiOutlinePlus size="20" className='plus' /></button>
        : ''}

      <div moduleName="Overview">

      </div>
    </div>
  )
}

{/* <input id="toggle" type="checkbox" checked>
<h2>Drop Down Menu</h2>
<ul>
<li><a href="#chapter1">Chapter 01</a></li>
<li><a href="#chapter2">Chapter 02</a></li>
<li><a href="#chapter3">Chapter 03</a></li>
<li><a href="#chapter4">Chapter 04</a></li>
</ul> */}

// .custom-select {
//   position: relative;
//   font-family: Arial;
// }

// .custom-select select {
//   display: none; /*hide original SELECT element: */
// }

// .select-selected {
//   background-color: DodgerBlue;
// }

// /* Style the arrow inside the select element: */
// .select-selected:after {
//   position: absolute;
//   content: "";
//   top: 14px;
//   right: 10px;
//   width: 0;
//   height: 0;
//   border: 6px solid transparent;
//   border-color: #fff transparent transparent transparent;
// }

// /* Point the arrow upwards when the select box is open (active): */
// .select-selected.select-arrow-active:after {
//   border-color: transparent transparent #fff transparent;
//   top: 7px;
// }

// /* style the items (options), including the selected item: */
// .select-items div,.select-selected {
//   color: #ffffff;
//   padding: 8px 16px;
//   border: 1px solid transparent;
//   border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
//   cursor: pointer;
// }

// /* Style items (options): */
// .select-items {
//   position: absolute;
//   background-color: DodgerBlue;
//   top: 100%;
//   left: 0;
//   right: 0;
//   z-index: 99;
// }

// /* Hide the items when the select box is closed: */
// .select-hide {
//   display: none;
// }

// .select-items div:hover, .same-as-selected {
//   background-color: rgba(0, 0, 0, 0.1);
// }
export default AddToCart;
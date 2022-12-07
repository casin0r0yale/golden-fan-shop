import React from "react";


const Popup = (props) => {

  // const onClickClose = (event) => {
  //   props.handleClose();
  // }

  return (
    <div className="popup-box">
      <div className="form-box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
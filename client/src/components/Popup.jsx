import React from "react";


const Popup = (props) => {

  const onClickFormBox = (event) => {
    event.stopPropagation();
  }

  return (
    <div className="popup-box" onClick={props.handleClose}>
      <div className="form-box" onClick={onClickFormBox}>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
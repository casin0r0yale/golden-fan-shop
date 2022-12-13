import React from 'react';

const PercentageBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 5,
    width: '65%',
    // height: 10,
    // width: '75%',
    backgroundColor: "#e0e0de",
    borderRadius: 5
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    transition: 'width 1s ease-in-out',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
  )
}

export default PercentageBar;
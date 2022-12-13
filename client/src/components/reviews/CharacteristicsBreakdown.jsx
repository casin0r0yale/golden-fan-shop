import React from 'react';
import { IoCaretDownSharp } from 'react-icons/io5'

const CharacteristicsBreakdown = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 5,
    width: '45%',
    // height: 10,
    // width: '75%',
    backgroundColor: "#e0e0de",
    borderRadius: 5
  }

  const fillerStyles = {
    height: 1,
    width: `${completed * 2}%`,
    backgroundColor: "#e0e0de",
    // borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    // color: 'white',
    // fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles} className="arrow"><IoCaretDownSharp /></span>
        {/* <span style={labelStyles}>{`${completed}%`}</span> */}
      </div>
    </div>
  )
}

export default CharacteristicsBreakdown;
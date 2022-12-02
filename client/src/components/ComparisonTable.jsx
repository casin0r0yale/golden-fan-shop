import React, {useState, useEffect} from 'react';

const ComparisonTable = (props) => {

  // Will need to pass in feature and value into the comparison model component
    //pass as objects with ...
  // Also need names of the main item and the related item.


  // Add all features into main list without duplicates
  // Then go through each product features and check it off if it matches

  return (
  <div class="row">
    <div class="compareLeft">COMPARING</div><br/><br/>

    <div class="compareLeftName">nameleft</div>
    <div class="compareRightName">nameright</div><br/><br/><br/>

    <div>
      <div class="compareLeft" style={{opacity: 0}}>&#x2713;</div>
      <div class="compareMiddleColumn">middle</div>
      <div class="compareRight">&#x2713;</div>
    </div>
  </div>
  )
}

export default ComparisonTable;

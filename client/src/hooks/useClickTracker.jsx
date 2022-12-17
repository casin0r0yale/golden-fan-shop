import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useClickTracker = () => {
  const [clickInfo, setClickInfo] = useState({
    element: null,
    widget: null,
    time: null
  })

  useEffect(() => {

    console.log("Tracked Click before axios:", clickInfo);

    if (!clickInfo.element) {
      return;
    }

    axios.post('/clickTrackPost', clickInfo)
    .then((response) => {

      console.log("AXIOS Tracked Click! Here's the info: ", clickInfo);

    })
    .catch ((err) => {
      console.log("AXIOS Click Tracking err: ", err)
    })

  }, [clickInfo])

  const handleClick = (event) => {

    setClickInfo({
      element: event.target.tagName ? event.target.tagName : "null",
      widget: event.target.getAttribute("moduleName") ? event.target.getAttribute("moduleName") : "null",
      time: new Date(Date.now()).toString()
      // moduleName: __filename,
    })
  }

  return {
    clickInfo,
    onClickTracker: handleClick
  }
}

export default useClickTracker;

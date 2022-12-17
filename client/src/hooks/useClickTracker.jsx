import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useClickTracker = () => {
  const [clickInfo, setClickInfo] = useState({
    element: '',
    widget: '',
    time: ''
  })

  useEffect(() => {

    if (clickInfo.element === '') {
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
      element: event.target.tagName,
      widget: event.target.getAttribute("moduleName"),
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

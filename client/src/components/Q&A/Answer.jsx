import React, {useState} from 'react';
import axios from 'axios';
import Popup from '../Popup.jsx';
import ExpandedImage from './ExpandedImage.jsx';

var Answer = (props) => {

  var answerObjList = Object.keys(props.answers);

  const [answerIndex, setAnswerIndex] = useState(2);

  var renderedAnswers = answerObjList.slice(0, answerIndex);

  var loadAnswers = () => {
    setAnswerIndex(answerObjList.length + 1);
  }

  const [isHelpful, setIsHelpful] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  var imageArray = [];

  const toggleImageExpand = () => {
    setIsImageExpanded(!isImageExpanded);
  }
  return (
  <div className="answer-list" widgetname="Questions/Answers">
    {renderedAnswers.map((answerKey, index) => {
      // console.log(answerKey);
      var currentAnswer = props.answers[answerKey];
      // console.log(currentAnswer)
      var answerDate = new Date(currentAnswer.date).toDateString();

      imageArray = currentAnswer.photos;

      var toggleHelpfulness = () => {
        setIsHelpful(!isHelpful);
        axios.put('/helpfulAnswer', {answer_id: currentAnswer.id})
        .then(success => {
          console.log('Success making answer helpful:', success)
        })
        .catch(err => {
          console.log('Error making answer helpful:', err);
        });
      }

      var toggleReport = () => {
        axios.put('/reportAnswer', {answer_id: currentAnswer.id})
        .then(success => {
          console.log(success);
        })
        .catch(err => {
          console.log('Error reporting answer', err);
        })
      }
      return (
        <div style={{marginBottom:"1.2em"}} widgetname="Questions/Answers" key={index}>
          <h3 style={{display: "inline"}} widgetname="Questions/Answers">A:</h3> <div style={{display: "inline"}}>{currentAnswer.body}</div>
          <p widgetname="Questions/Answers"> <span style={{fontSize:".8em", color: 'gray'}}>by {currentAnswer.answerer_name}, {answerDate}  |  Helpful? </span><a onClick={toggleHelpfulness} className="hyperlink" widgetname="Questions/Answers">Yes({currentAnswer.helpfulness})</a>  |  <a onClick={toggleReport} className="hyperlink" widgetname="Questions/Answers">Report Answer</a></p>
          <div>
            {currentAnswer.photos.length ? currentAnswer.photos.map(photo => {
              return(
                <div>
                  <img className="answer-image"src={photo} alt="photo" widgetname="Questions/Answers" onClick={toggleImageExpand}/>
                  {isImageExpanded && <Popup handleClose={toggleImageExpand} content={<ExpandedImage url={photo}/>}/>}
                </div>
              );
            }) : null }
          </div>
        </div>
      );
    })}

    {(answerObjList.length > 2) ? <b style={{margin: "2.5em 0em 1em 0em"}} onClick={loadAnswers} widgetname="Questions/Answers">LOAD MORE ANSWERS</b> : null}
  </div>
  );
};

export default Answer;
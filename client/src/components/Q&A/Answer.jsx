import React, {useState} from 'react';

var Answer = (props) => {
  var answerObjList = Object.keys(props.answers);
  return (
  <div>
    {answerObjList.map(answerKey => {
      // console.log(answerKey);
      var currentAnswer = props.answers[answerKey];
      // console.log(currentAnswer)
      var answerDate = new Date(currentAnswer.date).toDateString();
      return (
        <div>
          <p>A: {currentAnswer.body}</p>
          <p> by {currentAnswer.answerer_name}, {answerDate}</p>
        </div>
      );
    })}
  </div>
  );
};

export default Answer;
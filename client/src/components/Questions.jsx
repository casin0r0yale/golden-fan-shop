import React, {useState} from 'react';

var Questions = (props) => {

  return (
    <div>
      <h3>Questions &amp; Answers</h3>
      <div>
        Question List
        {props.data.map(question => {
          <h4>{question.question_body}</h4>
        })}
        <div>Answer List</div>

      </div>
    </div>
  );

}

export default Questions;
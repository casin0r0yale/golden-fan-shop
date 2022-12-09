import React, {useState} from 'react';
import Answer from './Answer.jsx';
import Popup from '../Popup.jsx';

var Questions = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(2);
  const [isHelpful, setIsHelpful] = useState(false);

  const toggleHelpfulness = () => {
    setIsHelpful(!isHelpful);
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const loadMoreQuestions = () => {
    setQuestionIndex(questionIndex + 1);
  }

  const mappedQuestions = props.data.slice(0, questionIndex);

  return (
    <div>
      <h3>Questions &amp; Answers</h3>
      <div>
        <div className="search-bar">
          <input className="form-control" type="text"/>
        </div>
        {mappedQuestions.map((question, index) => {

          return (
            <div>
              <h4 key={index}>Q: {question.question_body}</h4>
              <div>
                <p>Helpful? <a onClick={toggleHelpfulness}>Yes({(isHelpful) ? question.question_helpfulness + 1 : question.question_helpfulness})</a> | <a onClick={togglePopup}>Add An Answer</a></p>
              </div>
              <Answer answers={question.answers}/>
              <div>
                {isOpen && <Popup handleClose={togglePopup}/>}
              </div>
            </div>
          );
          })}
          <button className="answer-btn" onClick={loadMoreQuestions}>More Answered Questions</button>
          <button onClick={togglePopup}>Add A New Question</button>
      </div>
    </div>
  );

}

export default Questions;
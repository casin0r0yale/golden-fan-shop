import React, {useState} from 'react';
import Answer from './Answer.jsx';
import Popup from '../Popup.jsx';
import NewQuestionForm from './NewQuestionForm.jsx';

var Questions = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(2);
  const [isHelpful, setIsHelpful] = useState(false);
  var productInfo = props.product;

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
    <div data-testid="question-module">
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
                <p>Helpful? <a onClick={toggleHelpfulness}>Yes({(isHelpful) ? question.question_helpfulness + 1 : question.question_helpfulness})</a> | <a onClick={togglePopup} className="add-answer-btn">Add An Answer</a> | {(question.reported) ? 'Reported' : <a>Report Question</a>}</p>
              </div>
              <Answer answers={question.answers}/>
              <div>
                {isOpen && <Popup handleClose={togglePopup} content={<NewQuestionForm productName={productInfo.name}/>}/>}
              </div>
            </div>
          );
          })}
          {(props.data.length <= 2) ? null : <button className="answer-btn" onClick={loadMoreQuestions}>More Answered Questions</button>}
          <button onClick={togglePopup}>Add A New Question</button>
      </div>
    </div>
  );

}

export default Questions;
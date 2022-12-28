import React, {useState} from 'react';
import Answer from './Answer.jsx';
import Popup from '../Popup.jsx';
import NewQuestionForm from './NewQuestionForm.jsx';
import NewAnswerForm from './NewAnswerForm.jsx';

var Questions = (props) => {

  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(2);
  const [isHelpful, setIsHelpful] = useState(false);
  const [filter, setFilter] = useState('');
  var productInfo = props.product;

  const toggleHelpfulness = () => {
    setIsHelpful(!isHelpful);
  }

  const toggleQuestionPopup = () => {
    console.log(productInfo)
    setIsQuestionOpen(!isQuestionOpen);
  }

  const toggleAnswerPopup = () => {
    setIsAnswerOpen(!isAnswerOpen);
  }

  const loadMoreQuestions = () => {
    setQuestionIndex(questionIndex + 1);
  }

  var filteredQuestions = props.data.filter(question => {
    return question.question_body.indexOf(filter) > -1;
  })

  const changeFilter = (e) => {
    setFilter(e.target.value);
    console.log(filteredQuestions);
  }

  const mappedQuestions = filteredQuestions.slice(0, questionIndex);

  return (
    <div data-testid="question-module">
      <h3>Questions &amp; Answers</h3>
      <div>
        <div className="search-bar">
          <input className="form-control" type="text" onChange={changeFilter}/>
        </div>
        {mappedQuestions.map((question, index) => {

          return (
            <div key={index}>
              <h4 key={index}>Q: {question.question_body}</h4>
              <div>
                <p>Helpful? <a onClick={toggleHelpfulness}>Yes({(isHelpful) ? question.question_helpfulness + 1 : question.question_helpfulness})</a> | <a onClick={toggleAnswerPopup} className="add-answer-btn">Add An Answer</a> | {(question.reported) ? 'Reported' : <a>Report Question</a>}</p>
              </div>
              <Answer answers={question.answers}/>
              <div>
                {isQuestionOpen && <Popup handleClose={toggleQuestionPopup} content={<NewQuestionForm productName={productInfo.name}/>}/>}
                {isAnswerOpen && <Popup handleClose={toggleAnswerPopup} content={<NewAnswerForm currentQuestion={question.question_body} productName={productInfo.name}/>}/>}
              </div>
            </div>
          );
          })}
          {(filteredQuestions.length <= 2) ? null : <button className="answer-btn" onClick={loadMoreQuestions}>More Answered Questions</button>}
          <button onClick={toggleQuestionPopup}>Add A New Question</button>
      </div>
    </div>
  );

}

export default Questions;
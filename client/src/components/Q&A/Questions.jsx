import React, {useState} from 'react';
import Answer from './Answer.jsx';
import Popup from '../Popup.jsx';
import NewQuestionForm from './NewQuestionForm.jsx';
import NewAnswerForm from './NewAnswerForm.jsx';
import axios from 'axios';

var Questions = (props) => {

  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(2);
  const [isHelpful, setIsHelpful] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const [filter, setFilter] = useState('');
  var productInfo = props.product;

  const toggleQuestionPopup = () => {
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
    e.target.value.length >= 3 ? setFilter(e.target.value) : setFilter('');
    console.log(filteredQuestions);
  }

  const handleQuestionFormSubmit = (object) => {
    console.log('This is my submission object: ', object);
    var submittedQuestion = object
    axios.post('/submitQuestion', submittedQuestion)
    .then(success => {
      console.log(success)
    })
    .catch(err => {
      console.log('Error posting form', err);
    })
  }

  const handleAnswerFormSubmit = (object) => {
    console.log('This is my submission object: ', object);
    var submittedAnswer = object;
    axios.post('/submitAnswer', submittedAnswer)
    .then(success => {
      console.log(success)
    })
    .catch(err => {
      console.log('Error posting form', err);
    })
  }

  const mappedQuestions = filteredQuestions.slice(0, questionIndex);

  return (
    <div className="section" data-testid="question-module">
      <p widgetname="Questions/Answers">QUESTIONS &amp; ANSWERS</p>
      <div>
        {/* <div className="wrap"> */}
          <div className="search">
            <input className="form-control" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={changeFilter} widgetname="Questions/Answers"/>
            <button  className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
        {/* </div> */}
        <div className="question-block">
        {mappedQuestions.map((question, index) => {
          var questionHelpfulness = question.question_helpfulness;
          var helpful = false;
          var reported = question.reported;
          const toggleHelpfulness = () => {
            helpful = true;
            setIsHelpful(!isHelpful);
            questionHelpfulness += 1;
            axios.put('/helpfulQuestion', {question_id: question.question_id})
            .then(success => {
              console.log(success);
            })
            .catch(err => {
              console.log('Error requesting helpful', err);
            })
          }

          const toggleReported = () => {
            reported = !reported;
            setIsReported(!isReported);
            axios.put('/reportedQuestion', {question_id: question.question_id})
            .then(success => {
              console.log(success);
            })
            .catch(err => {
              console.log('Error requesting reported', err);
            })
          }

          return (
            <div style={{marginBottom: "1.5em"}}  widgetname="Questions/Answers" key={index}>
              <div style={{margin: "2em 0em 1.2em 0em"}}><h3 style= {{display: "inline"}} key={index} widgetname="Questions/Answers">Q:</h3> <p style= {{display: "inline"}}>{question.question_body}</p>
              <div style= {{display: "inline", float: "right"}} className="question-below-bar" widgetname="Questions/Answers">
                <div widgetname="Questions/Answers"><span style={{fontSize:".8em"}}>Helpful?</span> {isHelpful ? <a widgetname="Questions/Answers">Yes ({questionHelpfulness})</a> : <a onClick={toggleHelpfulness} className="hyperlink" widgetname="Questions/Answers">Yes ({questionHelpfulness})</a>} | <a onClick={toggleAnswerPopup} className="hyperlink" widgetname="Questions/Answers">Add An Answer</a> | {(isReported) ? <a widgetname="Questions/Answers">Reported</a> : <a onClick={toggleReported} widgetname="Questions/Answers" className="hyperlink">Report Question</a>}</div>
                </div>
              </div>
              <Answer answers={question.answers}/>
              <div>
                {isQuestionOpen && <Popup handleClose={toggleQuestionPopup} content={<NewQuestionForm productName={productInfo.name} handleFormSubmit={handleQuestionFormSubmit} id={productInfo.id}/>}/>}
                {isAnswerOpen && <Popup handleClose={toggleAnswerPopup} content={<NewAnswerForm currentQuestion={question.question_body} productName={productInfo.name} questionId={question.question_id} handleFormSubmit={handleAnswerFormSubmit}/>}/>}
              </div>
            </div>
          );
          })}
          </div>
          {((mappedQuestions.length >= props.data.length) || filteredQuestions.length <= 2) ? null : <button className="answer-btn" onClick={loadMoreQuestions} widgetname="Questions/Answers">More Answered Questions</button>}
          <button onClick={toggleQuestionPopup} widgetname="Questions/Answers" className="new-question-btn">Add A New Question</button>
      </div>
    </div>
  );

}

export default Questions;
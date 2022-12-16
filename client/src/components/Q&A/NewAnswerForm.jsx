import {React, useState} from 'react';

var NewAnswerForm = (props) => {
  return (
    <div>
      <h3>Submit Your Answer</h3>
      <h4>{props.productName} : {props.currentQuestion}</h4>
      <form>
        <label for="answer">Answer:</label><br></br>
        <textarea name="answer" id="answer" maxLength="1000" required></textarea><br></br><br></br>
        <label for="user">Username:</label><br></br>
        <input type="text" name="user" id="user" maxLength="60" placeholder="Example:jack543!" required/><br></br><br></br>
        <b>For privacy reasons, do not use your full name or email address.</b><br></br><br></br>
        <label for="email">Email:</label><br></br>
        <input type="email" name="email" id="email" maxLength="60" placeholder="Example: jack@email.com" required/><br></br><br></br>
        <b>For authentication reasons, you will not emailed.</b><br></br><br></br>
        <label for="photos">Upload Photos Here:</label><br></br>
        <input type="file" name="photos" multiple required/><br></br><br></br>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default NewAnswerForm;
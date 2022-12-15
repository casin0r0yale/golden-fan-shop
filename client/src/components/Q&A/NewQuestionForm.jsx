import React, {useState} from 'React';

var NewQuestionForm = (props) => {
  return (
    <div>
      <h3>Ask Your Question</h3>
      <h4>About the {props.productName}</h4>
      <form>
        <label for="question">Question:</label><br></br>
        <textarea name="question" maxLength="1000" required></textarea><br></br><br></br>
        <label for="user">Username: </label><br></br>
        <input type="text" name="user" id="user" maxLength="60" placeholder="Example: jackson11!"/><br></br><br></br>
        <b>For privacy reasons, do not use your full name or email address.</b><br></br><br></br>
        <label for="email">Email:</label><br></br>
        <input type="email" name="email" id="email" placeholder="Why did you like this product or not?" maxLength="60"/><br></br><br></br>
        <b>For authentication reasons, you will not be emailed.</b><br></br>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default NewQuestionForm;
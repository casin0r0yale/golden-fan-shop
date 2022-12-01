import React, {useState, useEffect} from 'react';

const ReviewForm = (props) => {
  return (
    <div>
      <h2>Write Your Review</h2>
      <h3>About the *Product Name Here*</h3>
      <form>
        <label>
          Do you recommend this product?*
          <input type="radio" id="yes" name="recommend" value="yes" required/>
          <label>yes</label>
          <input type="radio" id="no" name="recommend" value="no" required/>
          <label>no</label>
        </label>
        <br></br>
        <br></br>
        <label>
          What is your nickname?*
          <input type="text" name="nickname" placeholder="Example: jackson11!" maxLength="60" required/>
          <h5>For privacy reasons, do not use your full name or email address</h5>
        </label>
        <label>
          Your Email*
          <input type="email" name="email" placeholder="Example: jackson11@email.com" maxLength="60" required/>
          <h5>For authentication reasons, you will not be emailed</h5>
        </label>
      </form>
    </div>
  )
}

export default ReviewForm
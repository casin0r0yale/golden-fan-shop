import React, {useState, useEffect} from 'react';
import StarRating from './StarRating.jsx';

const ReviewForm = (props) => {

  const [charsLeft, setMinCharsLeft] = useState(50);

  const handleCharCount = (event) => {
    const charCount = event.target.value.length;
    const curMinCharsLeft = 50 - charCount;
    setMinCharsLeft(curMinCharsLeft);
  }

  const currRating = (rating) => {
    console.log('this is the current rating: ', rating);
    //pass this rating into the form upon submission
  }

  const [sizeText, setSizeText] = useState('');

  const size = {
    one: null,
    two: "1/2 a size too small",
    three: "pefect",
    four: "1/2 a size too big",
    five: null
  }

  const sizeSelection = (string) => {
    var text = size[string];
    console.log('this is the size text: ', text);
    setSizeText(text);
  }

  return (
    <div>
      <h2>Write Your Review</h2>
      <h3>About the *Product Name Here*</h3>
      <form className="review-form">
        <label>
          Overall Rating*
          <StarRating currRating={currRating}/>
        </label>
        <br></br>
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
          Characteristics*
          <fieldset>
            <label className="size-radio-buttons">
              <h4>Size</h4>
                <p>{sizeText}</p>
                <input type="radio" id="one" name="size" value="1" onClick={() => sizeSelection("one")}/>
                <label>1. A size too small</label>
                <input type="radio" id="two" name="size" value="2" onClick={() => sizeSelection("two")}/>
                <label>2</label>
                <input type="radio" id="three" name="size" value="3" onClick={() => sizeSelection("three")}/>
                <label>3</label>
                <input type="radio" id="four" name="size" value="4" onClick={() => sizeSelection("four")}/>
                <label>4</label>
                <input type="radio" id="five" name="size" value="5" onClick={() => sizeSelection("five")}/>
                <label>5. A size too wide</label>
            </label>
          </fieldset>
          <fieldset>
            <label>
              <h4>Width</h4>
              <input type="radio" id="1" name="width" value="1"/>
              <label>1. Too narrow</label>
              <input type="radio" id="2" name="width" value="2"/>
              <label>2</label>
              <input type="radio" id="3" name="width" value="3"/>
              <label>3</label>
              <input type="radio" id="4" name="width" value="4"/>
              <label>4</label>
              <input type="radio" id="5" name="width" value="5"/>
              <label>5. Too wide</label>
            </label>
          </fieldset>
          <fieldset>
            <label>
              <h4>Comfort</h4>
              <input type="radio" id="1" name="comfort" value="1"/>
              <label>1. Uncomfortable</label>
              <input type="radio" id="2" name="comfort" value="2"/>
              <label>2</label>
              <input type="radio" id="3" name="comfort" value="3"/>
              <label>3</label>
              <input type="radio" id="4" name="comfort" value="4"/>
              <label>4</label>
              <input type="radio" id="5" name="comfort" value="5"/>
              <label>5. Perfect</label>
            </label>
          </fieldset>
          <fieldset>
            <label>
              <h4>Quality</h4>
              <input type="radio" id="1" name="quality" value="1"/>
              <label>1. Poor</label>
              <input type="radio" id="2" name="quality" value="2"/>
              <label>2</label>
              <input type="radio" id="3" name="quality" value="3"/>
              <label>3</label>
              <input type="radio" id="4" name="quality" value="4"/>
              <label>4</label>
              <input type="radio" id="5" name="quality" value="5"/>
              <label>5. Perfect</label>
            </label>
          </fieldset>
          <fieldset>
            <label>
              <h4>Length</h4>
              <input type="radio" id="1" name="length" value="1"/>
              <label>1. Runs short</label>
              <input type="radio" id="2" name="length" value="2"/>
              <label>2</label>
              <input type="radio" id="3" name="length" value="3"/>
              <label>3</label>
              <input type="radio" id="4" name="length" value="4"/>
              <label>4</label>
              <input type="radio" id="5" name="length" value="5"/>
              <label>5. Runs long</label>
            </label>
          </fieldset>
          <fieldset>
            <label>
              <h4>Fit</h4>
              <input type="radio" id="1" name="fit" value="1"/>
              <label>1. runs tight</label>
              <input type="radio" id="2" name="fit" value="2"/>
              <label>2</label>
              <input type="radio" id="3" name="fit" value="3"/>
              <label>3</label>
              <input type="radio" id="4" name="fit" value="4"/>
              <label>4</label>
              <input type="radio" id="5" name="fit" value="5"/>
              <label>5. Runs long</label>
            </label>
          </fieldset>
        </label>
        <br></br>
        <label>
          Review Summary
            <br></br>
          <textarea type="text" name="summary" maxLength="60">
            Example: Best Purchase Ever!
          </textarea>
        </label>
          <br></br>
          <br></br>
        <label>
          Review Body
          <br></br>
          <textarea type="text" name="body" minLength="50" maxLength="1000" onChange={handleCharCount}>
            Why did you like the product or not?
          </textarea>
          {(charsLeft > 0) ? <p> Minimum required characters left: {charsLeft}</p> : null}
          {(charsLeft <= 0) ? <p>Minimum reached</p> : null}
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
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ReviewForm
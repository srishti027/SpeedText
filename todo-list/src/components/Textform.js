import React, { useState } from 'react';

function Textform(props) {
  const clickup = () => {
    console.log("button was clicked"  + text);
    let newText = text.toUpperCase();
    setText(newText);

  }
  const clickdown = () => {
    console.log("button was clicked"  + text);
    let newText = text.toLowerCase();
    setText(newText);

  }
  const Undo = () => {
    console.log("button was clicked"  + text);
    let newText = " ";
    setText(newText);

  }


  const uponChange = (event) => {
    console.log("text changed");
    setText(event.target.value);
  }

  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <div className="form-floating">
        <textarea className="form-control" value={text} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }} onChange={uponChange}  style= {{backgroundColor:props.mode === 'dark'? 'blue':'white', color: props.mode === 'dark'? 'white' : 'black'}}></textarea>
        <label htmlFor="floatingTextarea2"></label>
      </div>
      <button disabled={text.length === 0}className="btn btn-primary my-3  mx-2" onClick={clickup}>Convert to Uppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={clickdown}>Convert to Lowercase</button>
      <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={Undo}>Undo</button>
    </div>
    <div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters </p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes in reading </p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  );
}

export default Textform;

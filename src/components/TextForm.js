import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleClear = () =>{
        setText("")
        props.showAlert("Cleared", "success")
    }

  const [text, setText] = useState("Enter the text here .......");
  return (
    <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Enter the text to analyze</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#161031':'white', color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="10" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Text summary</h1>
            <p>Words : {text.split(" ").length}</p>
            <p>Length : {text.length}</p>
            <p>Read time : {0.008 * text.split(" ").length} min</p>
        </div>
    </>
  );
}

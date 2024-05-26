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

    const handleSentence = () =>{
        let words = text.split(" ");
        let sentence = "";
        for (let i = 0; i < words.length; i++){
            words[i] = 
            sentence += words[i].slice(0,1).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
        }
        setText(sentence);
        props.showAlert("Converted to Sentence case", "success")
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
    }

    const handleReplace =() =>{
        var x = document.querySelector('#textFind');
        var y = document.querySelector('#textReplace');
        if (x.value === null || x.value.trim() === "") {
            props.showAlert("Find field is empty, Please enter the word to find and replace", "warning");
        }
        else if(text.includes(x.value) === false){
            props.showAlert("No match found", "danger");
        }
        else{
            let newText = text.replaceAll(x.value, y.value);
            setText(newText);
            props.showAlert("Replaced", "success");
        }
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
            <button className="btn btn-primary mx-2" onClick={handleSentence}>Sentence case</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <div class="container my-3">
                <div class="row align-items-center">
                    <div class="col-auto">
                    <label htmlFor="textFind">Find</label>
                    <input class="form-control" type="text" id="textFind" style={{backgroundColor: props.mode === 'dark'?'#161031':'white', color: props.mode === 'dark'?'white':'black'}} />
                    </div>
                    <div class="col-auto">
                    <label htmlFor="textReplace">Replace</label>
                    <input class="form-control" type="text" id="textReplace" style={{backgroundColor: props.mode === 'dark'?'#161031':'white', color: props.mode === 'dark'?'white':'black'}} />
                    </div>
                </div>
                <button className="btn btn-primary my-3" onClick={handleReplace} >Replace</button>
            </div>
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


import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function TextMod(props) {

  const [myStyle,setmyStyle] = useState({
    backgroundColor: "black",
    color: "white"
  })
  
  const handleMode = ()=>{
    if(myStyle.color === 'white'){
      setmyStyle({
        backgroundColor: "white",
        color: "black"
      })
    }
    else{
      setmyStyle({
        backgroundColor: "black",
        color: "white"
      })
    }
  }

  const [text, setText] = useState("Enter text here ...")

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const handleUpperCase = () =>{
    setText(text.toUpperCase())
  }

  const handleLowerCase = () =>{
    setText(text.toLowerCase())
  }

  const handleCopy = () =>{
    var text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleSpace = () =>{
    var newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleClear = () =>{
    setText("")
  }

  const handleRepeat = () =>{
    setText(text + text.substring(0,text.length))
  }
  
  return (
    <>
    <div className=" container my-4 py-2 px-4" style={myStyle}>
        <h3><label for="myText" class="form-label">{props.heading}</label></h3>
        <textarea className="form-control my-3 mb-7" value ={text} onChange={handleOnChange} id="myText" rows="8" style={myStyle}></textarea>
    </div>
    <div className='container my-5'>
    <button className="btn btn-primary mx-2" onClick={handleUpperCase} style={myStyle}>Covert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowerCase} style={myStyle}>Covert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy} style={myStyle}>Copy To Clipboard</button>
    <button className="btn btn-primary mx-2" onClick={handleSpace} style={myStyle}>Remove Extra Space</button>
    <button className="btn btn-primary mx-2" onClick={handleClear} style={myStyle}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleRepeat} style={myStyle}>Repeat Text</button>
    </div>
    <div class="form-check form-switch container " >
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleMode} style={myStyle}/>
      <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
    <div className='container my-auto mt-3'style={myStyle}>
      <h2 className='my-5'><u>Your Text Summary</u></h2>
      <p className='my-3'><b>{text.split(" ").length}</b> words, <b>{text.length}</b> characters and <b>{text.split(".").length}</b> sentences.</p>
      <p className='my-3 '><b>{0.008 * text.split(" ").length}</b> mins to read the text</p>
      <h4 className='my-5'><u>Preview</u></h4>
      <p className="my-4">{text}</p>
    </div>
    </>
  )
}

TextMod.propTypes={heading:PropTypes.string.isRequired}

TextMod.defaultProps = {
  heading : "Enter Text ..."
}

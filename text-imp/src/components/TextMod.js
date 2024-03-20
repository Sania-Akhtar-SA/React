import PropTypes from 'prop-types';
import React, { useState } from 'react';


export default function TextMod(props) {

  const [text, setText] = useState("")

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const handleUpperCase = () =>{
    setText(text.toUpperCase());
    if(text===""){
      props.alert("Enter text to Convert into UpperCase !", "warning");
    }
    else{
      props.alert("Converted to UpperCase !", "success");
    }
  }

  const handleLowerCase = () =>{
    setText(text.toLowerCase())
    if(text===""){
      props.alert("Enter text to Convert into LowerCase !", "warning");
    }
    else{
      props.alert("Converted to LowerCase !", "success");
    }
  }

  const handleCopy = () =>{
    var text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    if(text.length === 0){
      props.alert("Enter text to Copy !", "warning");
    }
    else{
      props.alert("Text Copied !", "success");
    }
  }

  const handleSpace = () =>{
    var newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    if(text===""){
      props.alert("Enter text to remove extra space !", "warning");
    }
    else{
      props.alert("Extra space removed !", "success");
    }
  }

  const handleClear = () =>{
    setText("")
    if(text===""){
      props.alert("Already clear !", "warning");
    }
    else{
      props.alert("Text Cleared !", "success");
    }
  }

  const handleRepeat = () =>{
    setText(text +" " + text.substring(0,text.length))
    if(text===""){
      props.alert("Enter text to repeat !", "warning");
    }
    else{
      props.alert("Text Repeated !", "success");
    }
  }
  const p="Enter text here ...!!"
  return (
    <div className={`bg-${props.Mode} `}>
    <div className={`container my-4 py-2 px-4 bg-${props.Mode} `}>
        <h3><label htmlFor="myText" className={`form-label text-${props.Mode==='light'?'dark':'light'} bg-${props.Mode}`} >{props.heading}</label></h3>
        <textarea className={`form-control my-3 mb-7 text-${props.Mode==='light'?'dark':'light'} bg-${props.Mode}`} placeholder={p} value ={text} onChange={handleOnChange} id="myText" rows="8" ></textarea>
    </div>
    <div className='container my-5'>
    <button className={`btn mx-2 my-2 btn-outline-${props.Mode==='light'?'dark':'light'} btn-${props.Mode}`} onClick={handleUpperCase}>Covert to UpperCase</button>
    <button className={`btn mx-2 my-2 btn-outline-${props.Mode==='light'?'dark':'light'} btn-${props.Mode}`} onClick={handleLowerCase} >Covert to LowerCase</button>
    <button className={`btn mx-2 my-2 btn-outline-${props.Mode==='light'?'dark':'light'} btn-${props.Mode}`} onClick={handleSpace} >Remove Extra Space</button>
    <button className={`btn mx-2 my-2 btn-outline-${props.Mode==='light'?'dark':'light'} btn-${props.Mode}`} onClick={handleClear} >Clear Text</button>
    <button className={`btn mx-2 my-2 btn-outline-${props.Mode==='light'?'dark':'light'} btn-${props.Mode}`} onClick={handleRepeat} >Repeat Text</button>
    <button disabled={text===""} className={`btn mx-2 my-2 btn-outline-${props.Mode==='light'?'dark':'light'} btn-${props.Mode}`} onClick={handleCopy} >Copy To Clipboard</button>
    </div>
    <div className={`container my-auto mt-3 text-${props.Mode==='light'?'dark':'light'} bg-${props.Mode}`}>
      <h2 className='my-5'><u>Your Text Summary</u></h2>
      <p className='my-3'><b>{text==="" || text===" " ?0:text.split(/\s+[a-zA-Z]/).length}</b> words, <b>{text.length}</b> characters and <b>{(text.split(".").length)-1}</b> sentences.</p>
      <p className='my-3'><b>{text===""?0:text.split(/\s+[a-zA-Z]/).length * 0.008}</b> mins to read the text</p>
      <h4 className='my-5'><u>Preview</u></h4>
      <div className="my-4" style={{height:"150px"}}>{text.length>0?text:"Nothing to preview."}</div>
    </div>
    </div>
  )
}

TextMod.propTypes={heading:PropTypes.string.isRequired}

TextMod.defaultProps = {
  heading : "Enter Text ..."
}

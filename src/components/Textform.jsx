import React, {useState} from "react"


export default function TextForm(props){
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () =>{
    
    const newText =  text.toUpperCase();
    setText(newText);
props.showAlert('Converted to Uppercase', "success");
  }

const addText = () =>{
  
  let hello = " Hello" 
    const add = hello;
  setText(text + add)
props.showAlert('Added Hello', "success");
  }

const clearText = () =>{
    
    const clear = "";
  setText(clear)
props.showAlert('Text cleared', "success");
  }

const handleLowClick = () =>{
    
    const newText =  text.toLowerCase();
    setText(newText);
props.showAlert('Converted to Lowercase', "success");
  }

  const handleOnChange = (event) =>{
    
    setText(event.target.value)
  }
  return (
    <>
<div style = {{color: props.mode === "dark"?"white":"black"}} >
<form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
    
  </div>
  <textarea rows = "8" value = {text} onChange = {handleOnChange} 
style = {{backgroundColor: props.mode==="dark"?"grey":"white", 
color: props.mode === "dark"?"white":"black" }}></textarea>
</form>

  <button onClick = {handleUpClick} className= "btn btn-primary mx-2"> Convert to Uppercase</button>

<button onClick = {handleLowClick} className= "btn btn-primary mx-2"> Convert to Uppercase</button>

<button onClick = {addText}  className= "btn btn-primary mx-2"> Add Hello</button>

<button onClick = {clearText}  className= "btn btn-primary mx-2"> Clear Text</button>

  <div className = "container">
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length} and 
  {text.length} </p>
  <p>{0.008 * text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0? text :"Enter something in the textbox" }</p>
  </div>
  </div>
</>
  );
}
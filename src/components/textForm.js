import React,{useState} from 'react'

export default function TextForm(props) {
  const [Text,setText]=useState('');
  const handleonchange = (event)=>{
    setText(event.target.value);
  }
  const handleupper = ()=>{
    let newText=Text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Upper Case","success");

  }
  const handlelower=()=>{
    let newText=Text.toLowerCase();
    setText(newText);
   props.showalert("Converted to Lower Case","success");
  }
  const handleclick=()=>{
    let newText='';
    setText(newText);
    props.showalert("Text cleared","success");
  }
  const handlecopy=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text Copied","success");

  }

  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"#f8f9fa":"black"}}>
          <div className=" mb-3">
            <label htmlFor="myBox" className="form-label">{props.header}</label>
            <textarea className="form-control"  onChange={handleonchange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} value={Text} id="myBox" rows="10"></textarea>
          </div> 
          <button className="btn btn-primary mx-1" onClick={handleupper}>Click to UpperCase</button>
          <button className="btn btn-primary mx-1" onClick={handlelower}>Click to LowerCase</button>
          <button className="btn btn-primary mx-1" onClick={handleclick}>Clear Text </button>
          <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text </button>

    </div>
    <div className="container my-2 mx-1" style={{color:props.mode==="dark"?"#f8f9fa":"black"}}>
        <h1>Your text summary</h1>
        <p>{Text.split(' ').length} and {Text.length} characters</p>  
        <p>{0.008 * Text.split(' ').length} minutes to read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
    </div>    
    </>
  )

}

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";



export default function App() {
  const [mode,setmode]=useState("light");
  //const [mode2,setmode2]=useState("light");
  const [alert,setalert]=useState(null);
  const togglefun=()=>{
    if(mode==="light"){
      setmode("dark");
     document.body.style.backgroundColor="#191b1e";
     showalert("Enable","success");
     document.title='TextUtils - Dark mode';
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      showalert("Disable","success");
      document.title='TextUtils';
    }
  }
  const showalert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })
   setTimeout(() => {
    setalert(null)
   }, 1500);
  }
  /*const togglefun2=()=>{
    if(mode2!=="purple"){
      setmode2("purple");
      document.body.style.background="#CBC3E3"
    }
    else{
      setmode2("white");
      document.body.style.background="white"

    }
  }*/
  return (
    <>
    {/* <Router> */}
    <Navbar title='TextUtils' mode={mode}  toggle={togglefun} />
    <Alert  alert={alert}/>
    <div className="container" >
      {/* <Routes>
          <Route exact path="/about" element={ <About />}>
          </Route>
          <Route exact path="/textform" element={<TextForm header="Message box" mode={mode} showalert={showalert} />}>
          </Route>
      </Routes> */}
     
      <TextForm header="Message box" mode={mode} showalert={showalert} />
      <About /> 
          </div>
    {/* </Router> */}
    </>
  );
}


import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import About from "./components/About";
import React, {useState} from "react";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>
  setAlert({
  msg : message,
  type:  type
},
           setTimeout( () =>{
      setAlert(null);
 }, 2000) 
)

const toggleMode = ()=>{
  if(mode === "light"){
    setMode("dark")
 document.body.style.backgroundColor = "grey";
showAlert("Dark mode has been enabled","success")
  }
  else{
  setMode("light");
document.body.style.backgroundColor = "white";
showAlert("Light mode has been enabled","success")
  }
}
  
  return (
    <>
      <Router>
    <Navbar toggleMode = {toggleMode} title ="Sahil Adkar" mode ={mode}/>
      <Alert alert ={alert}/>
  
  
    <Routes>
      <Route exact path="/" element={<TextForm />} />
      <Route exact path="about" element={<About />} />
      
    </Routes>
  </Router>
      
    </>
  );
  
}

export default App;

  
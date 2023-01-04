import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar.js";
import TextFrom from "./Component/TextFrom.js";
import About from "./Component/About.js";


function App() {




  const tootgleMode=()=>{
    if (Mode ==='dark') {
      setMode('light')
      document.getElementById("id2").style.color="black"
    }else{
      setMode('dark')
      document.getElementById("id2").style.color="white"
    }
  }
  const [Mode, setMode] = useState('light')

  const tootgleMode2=()=>{
    if (Mode ==='dark') {
      document.getElementById("id2").style.color="pink"
    }else{
      document.getElementById("id2").style.color="red"
    }
  }
 
  return (
    <Router>
      <Navbar Mode={Mode} toogleMode={tootgleMode} toogleMode2={tootgleMode2}/>
      <Routes>
        <Route
          path="Text-Editor"
          element={
            <div className="container my-3">
              <TextFrom heading="Enter The Text Here To Analyze" />
            </div>
          }></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="*" element={<h1>Error 404 Page Not Found.</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

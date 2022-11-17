import React, { useState } from "react";

export default function TextFrom(props) {
  const handleupclick = () => {
    setText(Text.toUpperCase());
  };
  const handlelowclick = () => {
    setText(Text.toLowerCase());
  };
  const handleremoveclick = () => {
    setText("");
  };
  let inc = 1;
  const handleincclick = () => {
    inc += 0.5;
    let px = inc + "rem";
    document.getElementById("mybox").style.fontSize = px;
  };
  const handledecclick = () => {
    inc -= 0.5;
    let px = inc + "rem";
    document.getElementById("mybox").style.fontSize = px;
  };
  const handleboldclick = () => {
    document.getElementById("mybox").style.fontWeight = "bold";
  };
  const handleitaclick = () => {
    document.getElementById("mybox").style.fontStyle = "italic";
  };
  const handleunclick = () => {
    document.getElementById("mybox").style.textDecorationLine = "underline";
  };
  const handlecopyclick = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  };
  const handlespaceclick = () => {
  let newtext=Text.split(/[ ]+/);
  setText(newtext.join(" "))
  };




  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const [Text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleonchange}
            value={Text}
            id="mybox"
            placeholder="Enter Text Here"
            rows="7"></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>
          Convert To Uppercase
        </button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowclick}>
          Convert To Lowercase
        </button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleremoveclick}>
          Clear Screen
        </button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleincclick}>
          A+
        </button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handledecclick}>
          A-
        </button>
        {/* <button className="btn btn-primary mx-1 my-1" onClick={handlecolorclick}>
          {Mode}
        </button> */}
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleboldclick}>
          Bold
        </button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleitaclick}>
          Italic
        </button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleunclick}>
          Underline
        </button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopyclick}>
          Copy text
        </button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlespaceclick}>
          remove Extra Spaces{" "}
        </button>
    
      </div>

      <div className="container my-3 mx-1 my-1">
        <h2>Your Text Summary</h2>
        <p>
          <b>{Text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length}</b> Words and <b>{Text.length}</b>{" "}
          Charecters
        </p>
        <p>
          <b>{0.008 *Text.split(" ").filter((elem)=>{return elem.length!==0}).length}</b> Minites Read
        </p>
        <h2>Preview</h2>
        <p>
          <b>{Text.length>0?Text:"Nothing To Preview"}</b>
        </p>
      </div>


    </>
  );
}

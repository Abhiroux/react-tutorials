import React from "react";
import { useState } from "react";

export default function TextBox(props) {

    const [text, setText]=useState("");
    const convertUpper = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const convertLower = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearAll = ()=>{
        let newText = '';
        setText(newText);
    }
    const inputText = (event)=>{
        setText(event.target.value);
    }
    const selectAll = ()=>{
        document.getElementById('Textarea1').select();
        document.getElementById('Textarea1')
    }
    const copyToClipboard = ()=>{
        let Textarea1 = document.getElementById('Textarea1');
        Textarea1.select();
        document.execCommand('copy');
        props.popAlert("Copied to Clipboard","success")
    }
    const extraSpaceRemover = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    document.title="Text Utils - Home";
  return (
    <div >
      <form action="" >
        <div className="form-group my-1">
          <label htmlFor="Textarea1" className={`h1 text-${props.mode==='dark' ? 'light' : 'dark'}`}>Enter text to analyze</label>
          <textarea
            value={text}
            className={`form-control bg-${props.mode} text-${props.mode==='dark' ? 'light' : 'dark'}`}
            id="Textarea1"
            rows={6}
            onChange={inputText}
          />
        </div>
        <button type="button" className={`btn btn-sm btn-${props.mode==='dark' ? 'light' : 'dark'}`} onClick={convertUpper}>Change to UpperCase</button>
        <button type="button" className={`btn btn-sm btn-${props.mode==='dark' ? 'light' : 'dark'} ml-2`} onClick={convertLower}>Change to LowerCase</button>
        <button type="button" className={`btn btn-sm btn-${props.mode==='dark' ? 'light' : 'dark'} ml-2`} onClick={clearAll}>Clear all</button>
        <button type="button" className={`btn btn-sm btn-${props.mode==='dark' ? 'light' : 'dark'} ml-2`} onClick={selectAll}>Select all</button>
        <button type="button" className={`btn btn-sm btn-${props.mode==='dark' ? 'light' : 'dark'} ml-2`} onClick={copyToClipboard}>copy to clipboard</button>
        <button type="button" className={`btn btn-sm btn-${props.mode==='dark' ? 'light' : 'dark'} ml-2`} onClick={extraSpaceRemover}>Remove extra spaces</button>


      </form>
      <div className={`overviewText my-4 text-${props.mode==='dark' ? 'light' : 'dark'}`}>
        <h2>Your text summary</h2>
        <p>{`${text ? text.split(" ").filter(function(n){return n !== ''}).length : 0}`} Words and {text.length} Characters</p>
        <p>{`${text ? 0.008*text.split(" ").filter(function(n){return n !== ''}).length : 0}`} Minutes read</p>
        <h3>Preview</h3>
        <p>{`${text ? text : 'Enter your text above to preview'}`}</p>  
      </div>
    </div>
  );
}

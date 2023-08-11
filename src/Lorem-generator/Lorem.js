import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './lorem.css'

const Lorem = () => {
  const [data, setData] = useState([]);

  let apiKey="JTGtCmfLc4YxltnBe4GkOw==LWmcEXrkorLmYMG4";
  let generateBtn = document.getElementById('generate-btn');
  let copyBtn = document.getElementById('copy-btn');
  let paraDisplay = document.getElementById('para');
  let options = {
    method : "GET", 
    headers : { "X-Api-Key": apiKey }
  };
  let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=";

  let generateParas = () => {
    let noOfPara = document.getElementById('no-of-para').value;
    let finalURL = url + noOfPara;
    fetch(finalURL,options).then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      paraDisplay.innerText = data.text;
    })
  }

const copyParas=()=>{
   copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(paraDisplay.innerText);
    alert('Text copied to clipboard');
  });
}

  return (
    <div id="Lorem">
      <button className='btn btn-outline-dark m-2'><Link to='/' className='text-decoration-none'>&#8592;Back</Link></button>
      <h1 className='app-title'>Lorem ipsum generator</h1>
        <div className='bg-primary-subtle'>
          <div className='input-wrapper'>  
              <input type='number' id='no-of-para' className='form-control w-25' value={data} onChange={(e)=>setData(e.target.value)}></input>
              <button id='generate-btn' onClick={generateParas}>Generate</button>
              <button id='copy-btn' onClick={copyParas}>Copy</button>
          </div>
        </div>
        <div id='para'></div>
        
          
        
     
    </div>
  )
}

export default Lorem;
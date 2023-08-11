import axios from 'axios';
import React, { useState } from 'react';
import './meme.css';import { Link } from 'react-router-dom';


const Meme = () => {
   const [meme, setMeme] = useState([]);

  const memeHandler=()=>{
        axios.get('https://api.memegen.link/templates').then((res)=>{
            console.log(res.data[Math.floor(Math.random()*res.data.length)].example.url);
            setMeme(res.data[Math.floor(Math.random()*res.data.length)].example.url);
        })
    }

  return (
    <div className='memer'>
    <button className='btn btn-outline-dark m-2'><Link to='/' className='text-decoration-none'>&#8592;Back</Link></button>
    <div className='container'>
        
        <img src={meme} alt="Press button to get memes!" id='meme'/>
        <h6 id='title'>The content here keeps on changing!</h6>
        <button id='get-meme-btn' onClick={memeHandler} className='btn btn-outline-dark'>New meme</button>
    </div>
    </div>
  )
}

export default Meme
import axios from 'axios';
import React, { useState } from 'react';import { Link } from 'react-router-dom';


const Number = () => {
   const [data, setData] = useState([]);

   const handleChange=()=>{
    axios.get(`http://numbersapi.com/#random/trivia`).then((res)=>{
       console.log(res.data);
       setData(res.data[Math.floor(Math.random()*301)]);
       console.log(data);
   })
   }

  return (
    <div>
        <button className='btn btn-outline-dark m-2'><Link to='/' className='text-decoration-none'>&#8592;Back</Link></button>
        <button onClick={handleChange} className='d-flex mx-auto mb-4 btn btn-primary p-2'>Get Fact</button>
        <h2>{data.fact}</h2>
        <button className='d-flex mx-auto btn btn-primary p-2'>Get Random Fact</button>
        <h2>{data.trivia}</h2>
         
    </div>
  )
}

export default Number
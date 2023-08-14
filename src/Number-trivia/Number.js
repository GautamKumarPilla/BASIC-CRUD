import axios from 'axios';
import React, { useState } from 'react';import { Link } from 'react-router-dom';

const Number = () => {
   const [data, setData] = useState([]);
   const [num, setNum] = useState([]);
   const [fact, setFact] = useState();

   const handleChange=()=>{
    const array = ['date','random','math','trivia','year'];

    axios.get(`https://numbersapi.p.rapidapi.com/${num}/${fact}?rapidapi-key=ca11ac3789mshb659698bd01494dp1bc791jsn6de043a4839d`).then((res)=>{
       console.log(res.data);
       setData(res.data);
       setFact(array[(Math.floor(Math.random()*3))]);
   })
   }

  return (
    <div id='Trivia'>
        <button className='btn btn-outline-dark m-2'><Link to='/' className='text-decoration-none'>&#8592;Back</Link></button>
        <input onChange={(e)=>setNum(e.target.value)} className='form-control d-flex mx-auto w-25 mb-3' required type='number'></input>
        <button onClick={handleChange} className='d-flex mx-auto mb-4 btn btn-primary p-2'>Get Random Fact</button>
        <h2 className='d-flex mx-auto'>{data}</h2>
        <button disabled className='d-flex mx-auto btn btn-secondary p-2'>Get Fact</button>

    </div>
  )
}

export default Number
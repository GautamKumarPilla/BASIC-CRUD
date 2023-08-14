import axios from 'axios';
import React, { useState } from 'react';
import './Gender.css';
import { Link } from 'react-router-dom';

const Gender = () => {
   const [data, setData] = useState({});
   const [name, setName] = useState([]);

   const handleChange=()=>{
    axios.get(`https://api.genderize.io/?name=${name}`).then((res)=>{
       console.log(res.data);
       setData({...res.data});
       console.log(data);
   })
   }
   const handleName=(e)=>{
      setName((e.target.value).toLowerCase());
    }

  return (
    <div>
      <button className='btn btn-outline-dark m-2'><Link to='/' className='text-decoration-none'>&#8592;Back</Link></button>
      <div className='container'>
    <label className='form-label'>Search Name</label>
    <input className='form-control w-75' onChange={handleName} placeholder='Enter a name'></input><br/>
    <center className='m-2'>
    <strong>Count:</strong><span>{data.count}</span><br/>
    <strong>Name:</strong><span>{data.name}</span><br/>
    <strong>Gender:</strong><span>{data.gender}</span><br/>
    <strong>Probability:</strong><span>{data.probability}</span>
    </center>
    <button onClick={handleChange}>Search</button>
    </div>
    </div>
  )
}

export default Gender;
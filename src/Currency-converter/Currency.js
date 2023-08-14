import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';import { Link } from 'react-router-dom';
import './Currency.css';
import { ErrorMessage } from 'formik';

const Currency = () => {
    const [data, setData] = useState(0);
    //const [currency, setCurrency] = useState();
    const [want, setWant] = useState('');
    const [have, setHave] = useState('');

    // useEffect(()=>{
    //     axios.get(`https://restcountries.com/v3.1/currency/${have}`).then((res)=>{
    //     //console.log(Object.keys(res.data[0].currencies)[0]);
    //     console.log(Object.keys(res.data[0].currencies)[0]);
    //     setCurrency(Object.keys(res.data[0].currencies)[0]);
    //     console.log(res.data); 
    // })
    // },[]);

  const [inp1, setInp1] = useState(have);
  const [inp2, setInp2] = useState(want);
  const mapRef = useRef(null);


  const handleSwitchPlaces = () => {
    const tempPlace = want;
    setWant(have);
    setHave(tempPlace);
    console.log(inp1);
    console.log(inp2);
  };

    const handleChange=()=>{
     axios.get(`https://api.api-ninjas.com/v1/convertcurrency?have=${have}&want=${want}&amount=${data}`).then((res)=>{
        console.log(res.data);
        setData(res.data);
        console.log(data);
    })
    axios.get(`https://countries-cities.p.rapidapi.com/country/list?rapidapi-key=ca11ac3789mshb659698bd01494dp1bc791jsn6de043a4839d`).then((res)=>{
            console.log(res.data);
          })
    }

    if(want === have){
        ErrorMessage('Cannot choose same currency');
    }
 
   return (
     <div className='text-warning'>
         <button className='btn btn-outline-dark m-2'><Link to='/' className='text-decoration-none'>&#8592;Back</Link></button>
        <div className='container'>
            <div className='d-flex flex-wrap justify-content-between'>
            <select className='form-select w-25 mb-2' defaultValue='FROM' value={have} onChange={(e)=>{setHave(e.target.value)}}>
               {/* {
                currency && currency.map((a,i)=>{
                    return <option i={i}>{a}</option>
                })
               } */}
                <option selected>Select one</option>
                <option>INR</option>
                <option>USD</option>
                <option>MAD</option>
                <option>IRR</option>
                <option>IDR</option>
                <option>EUR</option>
                <option>RSD</option>
                <option>GBP</option>
                <option>PGK</option>
                <option>CNY</option>
            </select>
            <button className='btn btn-outline-danger p-1' onClick={handleSwitchPlaces}>Switch</button>
            
            <input className='form-control w-25 mb-2' placeholder='AMOUNT' type='number' onChange={(e)=>{setData(e.target.value)}}></input>
            
            </div>

            <select className='form-select w-25 mb-2' defaultValue='TO' value={want} onChange={(e)=>{setWant(e.target.value)}}>
                <option selected>Select one</option>
                <option>AUD</option>
                <option>CNY</option>
                <option>LKR</option>
                <option>GBP</option>
                <option>ZAR</option>
                <option>USD</option>
                <option>MAD</option>
                <option>CZK</option>
                <option>EUR</option>
                <option>INR</option>
            </select>

            <label>Converted-currency</label>
            <h2>{data.new_amount}</h2>
            <label>Old Currency</label>
            <h2>{data.old_amount}</h2>
            <button onClick={handleChange} className='d-flex mx-auto mb-4 btn btn-danger p-2'>Currency convert</button>

        </div>
    </div>
  )
}

export default Currency;
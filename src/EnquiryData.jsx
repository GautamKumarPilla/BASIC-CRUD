import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './EnquiryData.css';


const EnquiryData = () => {

   const [data, setData] = useState({});
   const {id} = useParams();

   useEffect(()=>{
     axios.get(`http://localhost:4500/register/${id}`)
         .then((res)=>{
            console.log("res.data",res.data);
            setData({...res.data});
            console.log(id);
        })
   },[id])

  return (
    <div className='d-flex justify-content-center mt-5'>
            <div className='card bg-danger-subtle mx-auto border border-3 mt-5 shadow-lg p-4 mb-5'>
              <h3 className='border-bottom'>NAME : {data.fullname}</h3>
                <div className=''>
                   <h5 className=''>Courses Opted : {data.course}
                   </h5><br />
                   <h5 className=''>CONTACT : {data.contact}</h5><br />
                   <h5 className=''>EMAIL : {data.email}</h5><br />
                   <h5 className=''>STREAM : {data.academics}</h5>
                </div>

            </div>
    </div>
  )
}

export default EnquiryData;
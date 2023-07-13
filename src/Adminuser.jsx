import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Adminuser() {
  const [data, setData] = useState([]);
   
  useEffect(()=>{
      axios.get('http://localhost:4500/register').then((res)=>{
            setData([...res.data]);
            console.log(res.data);
            console.log([...res.data]);
      })
  },[]);
  
return (
  <div>
        <h1>Admin user details</h1>
       <center>
       <table cellPadding={'10px'} border={'4px'} style={{backgroundColor:'bisque'}}>
                <thead align={'center'} style={{border:'2px solid'}}>
                  <tr>
                    <th>Fullname</th>
                    <th>Course</th>
                    <th>Unique-ID</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody align={'center'}>
        {
           data.map((e) => {
              return(
                <tr style={{border:'2px solid'}}>
                  <td>{e.fullname}</td>
                  <td>
                    {
                      e.course.map((a,i)=>{
                         return  <ul type='circle'><li>{a}</li></ul>
                      })
                    }
                  </td>
                  <td>{e._id}</td>
                  <td><Link to={`/enquirydata/${e._id}`} type='text-decoration-none' style={{}}>Expand+</Link></td>
                </tr>
              )
           })
        }
      </tbody>
  </table> 
       </center>
  </div>
  )
}

export default Adminuser;
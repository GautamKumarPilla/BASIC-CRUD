import axios from 'axios';
import React, { useEffect, useState } from 'react';


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
       <table cellPadding={'10px'} cellSpacing={'5px'} border={'4px outset'} style={{backgroundColor:'beige'}}>
                <thead align={'center'} style={{border:'2px solid blue'}}>
                  <tr>
                    <th>Fullname</th>
                    <th>Course</th>
                    <th>Academics</th>
                    <th>Experience</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Unique-ID</th>
                  </tr>
                </thead>
                <tbody align={'center'}>
        {
           data.map((e) => {
              return(
                <tr style={{border:'2px solid'}}>
                  <td>{e.fullname}</td>
                  <td>{e.course}</td>
                  <td>{e.academics}</td>
                  <td>{e.experience}</td>
                  <td>{e.contact}</td>
                  <td>{e.email}</td>
                  <td>{e._id}</td>
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
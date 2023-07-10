import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm =()=>{

    const teleport = useNavigate();

    return(
        <div className="mt-5">
        <div className="w-25 mx-auto">
            <form className="form-control bg-dark">
                <h3 className="text-primary text-center">Login</h3>
                <label htmlFor="" className="form-lable mt-2 text-success">Username</label>
                <input type="text" required placeholder="Enter username" className="form-control" />
                <label htmlFor="" className="form-lable mt-2 text-danger">Password</label>
                <input type="password" required placeholder="Enter password" className="form-control"/>
                <div className="mt-2">
                <Link to="/mail" className="text-warning text-decoration-none"><p>Forgot Password?</p></Link>
                </div>
                <div className="d-flex justify-content-center">
                <button className="btn btn-outline-light border border-3 border-info mt-2" onClick={()=>{teleport('/')}}>Submit</button>
                </div>
            </form>
            <Link to="/signup" className="text-light">Don't have an account yet?(SignUp)</Link>
        </div>
        </div> 
        )
    }; 

export default LoginForm;



// import './App.css';
// import React, { useState } from 'react';
// import Axios from 'axios';

// function App() {
//   const [name, setName] = useState("")
//   const [role, setRole] = useState("")

//   const handleSubmit = (e) => {
//       e.preventDefault();

//       Axios.post('http://localhost:4000/insert', {
//           fullName: name,
//           companyRole:role
//       })
//   }

//   return (
//     <div className="App">
//       <header className="App-header"> 
//         <div className="logIn-form">
//             <form onSubmit={handleSubmit}>
//                 <p>First Name</p>

//                 <input
//                   className = "Name" 
//                   type="text"
//                   placeholder="First name ..."
//                   onChange={(e) => {setName(e.target.value)}}
//                 />

//                 <p> Company Role</p>

//                 <input 
//                   className = "Role"
//                   type="text"
//                   placeholder = "Role...." 
//                   onChange={(e) => {setRole(e.target.value)}}
//                 />

//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// const CreateForm = ()=>{

//     const [newCourse, setNewCourse] = useState({
//         title : '',
//         duration : '',
//         professor : '',
//         age : 0
//     });

//     const [course, setCourse] = useState([]);

//     useEffect(()=>{
//         axios.get('http://localhost:4600/courses').then((res)=>{
//             setCourse([...res.data]);
//         })
//     },[]);
//     //console.log(course);

//     const Add = ()=>{
//         axios({
//             method: 'post',
//             url: 'http://localhost:4600/addCourse',
//             data: newCourse
//         }).then(()=>{
//             alert('Course added');
//         });
//     };
//     //console.log(newCourse);

//     const Del = ()=>{
//         const id = '649ff35c51602589d6c76e73';
//         axios.delete(`http://localhost:4600/deleteCourse/${id}`).then(()=>{
//             alert('course deleted');
//         });
//     };
    
//     const handleSubmit = (event)=>{
//         event.preventDefault();
//     };

//     return(
//         <div>
//             <div className="m-3">
//                 <form className="form-control w-25 text-center" onSubmit={handleSubmit}>
//                     <label>Title</label> <br />
//                     <input type="text" name="" id="" onChange={(t)=>{setNewCourse({...newCourse,title:t.target.value})}}/> <br />

//                     <label>Duration</label><br />
//                     <input type="text" name="" id="" onChange={(d)=>{setNewCourse({...newCourse,duration:d.target.value})}}/> <br />

//                     <label>Professor</label><br />
//                     <input type="text" name="" id="" onChange={(p)=>{setNewCourse({...newCourse,professor:p.target.value})}}/><br />

//                     <label>Age</label><br />
//                     <input type="number" name="" id="" onChange={(a)=>{setNewCourse({...newCourse,age:a.target.value})}}/> <br />

//                     <button onClick={Add}>Submit</button>
//                     <button onClick={Del}>Delete</button>
//                 </form>
//             </div>
//                 <table cellPadding={'10'} className="table table-bordered border-dark w-25 m-3">
//                     <thead>
//                         <tr>
//                             <th>Title</th>
//                             <th>Duration</th>
//                             <th>Professor</th>
//                             <th>Age</th>
//                             <th>Delete Course</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             course.map((cd)=>{
//                                 return (
//                                     <tr>
//                                         <td>{cd.title}</td>
//                                         <td>{cd.duration}</td>
//                                         <td>{cd.professor}</td>
//                                         <td>{cd.age}</td>
//                                         <td><button>Delete</button></td>
//                                     </tr>
//                                 )
//                             })
//                         }
//                     </tbody>
//                 </table>
//             <div>

//             </div>
//         </div>
//     );
// };

// export default CreateForm;

{/* <table>
                <thead></thead>
      
                <tbody>
                  <tr>
                    <td key={0}>{e.course}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table> */}


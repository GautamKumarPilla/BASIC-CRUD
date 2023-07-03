import React, { useState } from 'react';
import axios from 'axios';

const CForm =()=> {
    const [addCourse, setAddCourse] = useState({
        name:'',
        duration:'',
        type:'',
        price:0
   });
  // const [delCourse, setDelCourse] = useState({
     
  //  })
  const [upCourse,setUpCourse] = useState({
        name:'SpringBoot'
  })
  const [patchCourse,setPatchCourse] = useState({
        name:'NodeJs',
        // duration:'2weeks',
        // type:'Offline',
        // price: 10000
  })

  const handleSubmit=(event)=>{
      event.preventDefault();
  }
   
const Add = ()=>{
  axios.post("http://localhost:4500/addCourse",addCourse).then((res)=>{
         console.log(res.data);
    })
  console.log(addCourse);
  console.log(addCourse.name);
  console.log(addCourse.duration);
  console.log(addCourse.type);  
}
const Delete=()=>{
     const id = '649edea3e1d7594fa7b8a8ad';
  axios.delete(`http://localhost:4500/deleteCourse/${id}`).then(() =>{
       alert('Course deleted');
  })
  //console.log(delCourse);
}

const Update=()=>{
  const id = '649edd7fe1d7594fa7b8a8a9';
    axios.put(`http://localhost:4500/updateCourse/${id}`,upCourse).then((res)=>{
      console.log(res.data);
   })
}

const Patch=()=>{
    const id = '649edd7fe1d7594fa7b8a8a9';
    axios.patch(`http://localhost:4500/patchCourse/${id}`,patchCourse).then((res)=>{
      console.log(res.data);
})
}

  return (
    <div>
       <form onSubmit={handleSubmit}> 
       <p>Name: </p>
       <input className="" type="text" placeholder="" onChange={(e) => {setAddCourse({...addCourse,name:(e.target.value)})}}/>
       <p>Duration: </p> 
       <input type="text" name="" onChange={(e) => {setAddCourse({...addCourse,duration:(e.target.value)})}}/>
       <p>Type: </p>
       <input type="text" name="" onChange={(e) => {setAddCourse({...addCourse,type:(e.target.value)})}}/>
       <p>Price: </p>
       <input type="text" name="" onChange={(e) => {setAddCourse({...addCourse,price:(e.target.value)})}}/>
       </form>
       <br />

       <button onClick={Add} className='btn btn-success me-2'>Add Course</button>
       <button onClick={Delete} className='btn btn-danger'>Delete Course</button>
       <button onClick={Update} className='btn btn-warning ms-2'>Update Course</button>
       <button onClick={Patch} className='btn btn-info ms-2'>Patch Course</button>
    </div>
  )
}

export default CForm;
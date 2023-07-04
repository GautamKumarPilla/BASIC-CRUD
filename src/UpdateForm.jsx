import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CourseForm from './CourseForm';


function UpdateForm() {
   var {id} = useParams();
   const [course, setCourse] = useState(null);

   useEffect(()=>{
     axios.get(`http://localhost:4500/courses/${id}`).then((res)=>{
        console.log(res.data);
        setCourse({...res.data});
     })
   },[id])

  return (
    <div>
        {
          (course && <CourseForm course={{...course}}></CourseForm>)
        }
    </div>
  )
}

export default UpdateForm;
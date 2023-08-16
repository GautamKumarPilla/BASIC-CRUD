import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useParams } from 'react-router';

const UpdateDevice = () => {
    const [cus, setCus] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:4600/customers/${id}`).then((res)=>{
            console.log(res.data);
            setCus([...res.data]);
        })
    },[])
    console.log(cus[0]);
 
  return (
    <div>
       <h1>Update Customer</h1>
        <Formik initialValues={[...cus]}
        onSubmit={
            (values)=>{
             console.log(values);
             axios.put(`http://localhost:4600/update/${id}`,values)
        }
    }
        >
            {
                ({handleSubmit,handleChange,handleBlur})=>{
                    return(
                        <Form>
                            Firstname:<Field name="firstname"></Field><br/>
                            Lastname:<Field name="lastname"></Field><br/>
                            Age:<Field name="age"></Field><br/>
                            <button onClick={handleSubmit}>Update</button>
                        </Form>
                    )
                }
            }
        </Formik>
    </div>
  )
}

export default UpdateDevice;
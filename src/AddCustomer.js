import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router';

const AddCustomer = () => {
    const [dev, setDev] = useState([]);
    var navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4600/customers').then((res)=>{
            console.log(res.data);
            setDev(res.data);
            console.log(dev);
        })
    },[dev])
  return (
    <div>
        <button className='btn btn-dark' onClick={()=>{navigate('/')}}>- Back</button>
       <h1>ADD CUSTOMER</h1>
        <Formik initialValues={{
            firstname:'',
            lastname:'',
            age:''
        }
    }
        onSubmit={
            (values)=>{
             console.log(values);
             axios.post("http://localhost:4600/add",values).then(()=>{
                alert("Added!")
             })
             navigate('/')
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
                            <button onClick={handleSubmit}>Add</button>
                        </Form>
                    )
                }
            }
        </Formik>
    </div>
  )
}

export default AddCustomer;
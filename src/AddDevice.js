import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router';

const AddDevice = () => {
    const [dev, setDev] = useState([]);
    var navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4500/device').then((res)=>{
            console.log(res.data);
            setDev(res.data);
            console.log(dev);
        })
    },[dev])
  return (
    <div>
        <button className='btn btn-dark' onClick={()=>{navigate('/')}}>- Back</button>
       <h1>ADD DEVICE</h1>
        <Formik initialValues={{
            brand:"",
            color:"",
            ram:"",
            price:""
        }
    }
        onSubmit={
            (values)=>{
             console.log(values);
             axios.post("http://localhost:4500/add",values).then(()=>{
                alert("Added!")
             })
        }
    }
        >
            {
                ({handleSubmit,handleChange,handleBlur})=>{
                    return(
                        <Form>
                            Brand:<Field name="brand"></Field><br/>
                            Color:<Field name="color"></Field><br/>
                            Ram:<Field name="ram"></Field><br/>
                            Price:<Field name="price"></Field><br/>
                            <button onClick={handleSubmit}>Add</button>
                        </Form>
                    )
                }
            }
        </Formik>
    </div>
  )
}

export default AddDevice;
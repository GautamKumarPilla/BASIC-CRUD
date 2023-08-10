import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useParams } from 'react-router';

const UpdateDevice = () => {
    const [dev, setDev] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:4500/device/${id}`).then((res)=>{
            console.log(res.data);
            setDev([...res.data]);
        })
    },[])
    console.log(dev[0]);
 
  return (
    <div>
       <h1>Update DEVICE</h1>
        <Formik initialValues={[...dev]}
        onSubmit={
            (values)=>{
             console.log(values);
             axios.put(`http://localhost:4500/update/${id}`,values)
        }
    }
        >
            {
                ({handleSubmit,handleChange,handleBlur})=>{
                    return(
                        <Form>
                            Brand:<Field name="brand" value={dev.brand}></Field><br/>
                            Color:<Field name="color" value="color"></Field><br/>
                            Ram:<Field name="ram" value="ram"></Field><br/>
                            Price:<Field name="price" value="price"></Field><br/>
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
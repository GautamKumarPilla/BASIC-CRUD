import React from 'react';
import {Formik, Field ,Form} from 'formik';
import { useUpdateDeviceByIdMutation } from './Services/Devices';

function Update(props) {
    console.log(props);
    var updated = props.dev;
    var [ dev,x ] = useUpdateDeviceByIdMutation();    
    
  return (
    <div>
        <Formik
        initialValues={{...updated}}
        onSubmit={(values)=>{
            console.log(values)
             dev(values); 
        }}
        >
            {
                ({handleSubmit})=>{
                    return (
                        <Form>
                           Brand : <Field name="brand"></Field>  <br></br>
                           Color : <Field name="color"></Field> <br></br>
                           RAM : <Field name="ram"></Field> <br></br>
                           Price : <Field name="price"></Field> <br></br>
                            <button onClick={handleSubmit}>Update Device</button>
                        </Form>
                    )
                }
        }
        </Formik>
    </div>
  )
}

export default Update;
import React from 'react';
import {Formik, Field ,Form} from 'formik';
import { useAddDeviceMutation } from '../Services/Devices';

function Add() {
   const [dev, x] = useAddDeviceMutation();
   console.log(useAddDeviceMutation());
  return (
    <div>
        <Formik
        initialValues={{
            brand:'',
            color:'',
            ram:'',
            price:0
        }}
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
                           <button onClick={handleSubmit}>Add Device</button>
                        </Form>
                    )
                }
        }
        </Formik>
    </div>
  )
}

export default Add;
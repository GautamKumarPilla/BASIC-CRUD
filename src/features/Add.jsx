import React from 'react';
import {Formik, Field ,Form} from 'formik';
import { useAddDeviceMutation } from '../Services/Devices';
import * as Yup from 'yup';
import '../App.css';

const Add=()=> {
   const [dev, x] = useAddDeviceMutation();
   console.log(useAddDeviceMutation());

   const validSchema = Yup.object().shape({
    brand: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('*Required'),
    color: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('*Required'),
    ram: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('*Required'),
    price: Yup.number().required('*Required').min(4, 'Too Short!'),
  });


  return (
    <div>
        <h1>Add a device</h1>
        <div className='d-flex justify-content-center rounded-5 shadow-lg p-3 bg-white rounded bg-warning-subtle w-25 mx-auto'>
        <Formik
        initialValues={{
            brand:'',
            color:'',
            ram:'',
            price:0
        }}
        validationSchema={validSchema}
        onSubmit={(values)=>{
            console.log(values)
            dev(values);
        }}
        >
            {
                ({handleSubmit, errors, touched})=>{
                    return (
                        <Form>
                           <label htmlFor="brand">Brand :</label> <Field name="brand" className="form-control d-inline"></Field>
                           {errors.brand && touched.brand ? (
                                <p>{errors.brand}</p>
                            ) : null} 
                           <label htmlFor="color">Color :</label> <Field name="color" className="form-control d-inline"></Field> 
                           {errors.color && touched.color ? (
                                <p>{errors.color}</p>
                            ) : null} 
                           <label htmlFor="ram">RAM :</label> <Field name="ram" className="form-control d-inline"></Field> 
                           {errors.ram && touched.ram ? (
                                <p>{errors.ram}</p>
                            ) : null} 
                           <label htmlFor="price">Price :</label> <Field name="price" className="form-control d-inline"></Field> 
                           {errors.price && touched.price ? (
                                <p>{errors.price}</p>
                            ) : null} 
                           <button onClick={handleSubmit} className='btn btn-warning mt-3'>Add Device</button>
                        </Form>
                    )
                }
        }
        </Formik>
        </div>
    </div>
  )
}

export default Add;
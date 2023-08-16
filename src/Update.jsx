import React, { useEffect } from 'react';
import {Formik, Field ,Form} from 'formik';
import { useUpdateDeviceByIdMutation } from './Services/Devices';
import * as Yup from 'yup';

function Update(props) {
    console.log('props',props);
    var updated = props.dev;
    var [ dev,x ] = useUpdateDeviceByIdMutation();    

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
    <div className='d-flex justify-content-center rounded-5 shadow-lg p-3 bg-white rounded bg-success-subtle w-25 mx-auto'>
        <Formik
        initialValues={{...updated}}
        validationSchema={validSchema}
        onSubmit={(values)=>{
            console.log(values);
             dev(values); 
        }}
        >
            {
                ({handleSubmit,errors,touched})=>{
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
                            <button onClick={handleSubmit} className='btn btn-success mt-3'>Update Device</button>
                        </Form>
                    )
                }
        }
        </Formik>
    </div>
  )
}

export default Update;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate, useParams } from 'react-router';

const UpdateCustomer = (props) => {
    var cus = props.cus;
    var id = props.id;
    var nav = useNavigate();
    console.log(props);

  return (
    <div>
      
        <Formik 
        initialValues={{...cus}}
        onSubmit={
            (values)=>{
             console.log(values);
             axios.put(`http://localhost:4600/update/${id}`,values)
             nav('/')
        }
    }
        >
            {
                ({handleSubmit})=>{
                    return(
                        <Form>
                            Firstname:<Field name="firstname"></Field><br/>
                            Lastname:<Field name="lastname" ></Field><br/>
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

export default UpdateCustomer;
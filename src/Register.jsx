import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from 'yup';
import axios from "axios";

const Register = ()=>{
  const [enquiryData, setEnquiryData] = useState({
            
  })

  return(
    <div className="mt-5 d-flex justify-content-center">

        <div className="w-50">
            <Formik
                initialValues={{
                    fullname: '',
                    experience: '',
                    course: '',
                    academics: '',
                    contact: '',
                    email: ''
                }}
                
                onSubmit={(values)=>{
                    console.log(values);
                    axios.post('http://localhost:4500/register',values).then((res)=>{
                       // console.log(res.data);
                    })
                    
                }}

                validationSchema={Yup.object({
                    fullname:Yup.string().required('*Enter your fullname'),
                    academics:Yup.string().required('*Required field'),
                    contact:Yup.number().min(10,'*Must be 10 digits').required('*Required field'),
                    email:Yup.string().required('*Required field')
                })}
            > 
            {
                 ({
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit
              
              }) => (
                  <form onSubmit={handleSubmit} className="form-control p-5" style={{backgroundColor: 'lightblue'}}>
                      <h2 className="border-bottom">Enquiry Form</h2>
                      <label htmlFor="us" className="form-label mt-2">Full Name</label>
                      <Field
                          type="text"
                          name="fullname"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Full Name"
                          className="form-control w-50 mx-auto"
                      ></Field>
                      <div className="text-danger">{errors.fullname && touched.fullname && errors.fullname}</div>

                      <label className="form-check-label mt-2">Experience:</label>
                      <div className="form-check">
                          <label className="form-check-label">
                              <Field
                                  type="radio"
                                  name="experience"
                                  value='Fresher'
                                  className="form-check-input"
                              ></Field>
                          Fresher</label>

                          <label className="form-check-label">
                              <Field
                                  type="radio"
                                  name="experience"
                                  value='0-5'
                                  className="ms-2 form-check-input"
                              ></Field>
                          &nbsp;0-5</label>

                          <label className="form-check-label">
                              <Field
                                  type="radio"
                                  name="experience"
                                  value='5-10'
                                  className="ms-2 form-check-input"
                              ></Field>
                          &nbsp;5-10</label>
                      </div>

                      <label className="form-check-label mt-2">Course:</label>
                      <div className="form-check">
                          <label className="form-check-label ms-4">
                              <Field
                                  type="checkbox"
                                  name="course"
                                  value='Frontend'
                                  className="form-check-input"
                              ></Field>
                          Front-end</label>

                          <label className="form-check-label">
                              <Field
                                  type="checkbox"
                                  name="course"
                                  value='ReactJS'
                                  className="ms-2 form-check-input"
                              ></Field>
                          &nbsp;ReactJS</label>

                          <label className="form-check-label">
                              <Field
                                  type="checkbox"
                                  name="course"
                                  value='Angular'
                                  className="ms-2 form-check-input"
                              ></Field>
                          &nbsp;Angular</label> <br />

                          <label className="form-check-label">
                              <Field
                                  type="checkbox"
                                  name="course"
                                  value='Backend'
                                  className="ms-2 form-check-input"
                              ></Field>
                          &nbsp;Back-end</label>

                          <label className="form-check-label">
                              <Field
                                  type="checkbox"
                                  name="course"
                                  value='Java-Full Stack'
                                  className="ms-2 form-check-input"
                              ></Field>
                          &nbsp;Java-Full Stack</label>

                          <label className="form-check-label">
                              <Field
                                  type="checkbox"
                                  name="course"
                                  value='Core-Java'
                                  className="ms-2 form-check-input"
                              ></Field>
                          &nbsp;Core-Java</label>

                          <label className="form-check-label">
                              <Field
                                  type="checkbox"
                                  name="course"
                                  value='Python'
                                  className="ms-2 form-check-input"
                              ></Field>
                          &nbsp;Python</label>

                          <label className="form-check-label">
                              <Field
                                  type="checkbox"
                                  name="course"
                                  value='Other'
                                  className="ms-2 form-check-input"
                              ></Field>
                          &nbsp;Other</label>
                      </div>

                      <label htmlFor="us" className="form-label mt-2">Academics:</label>
                      <Field
                          type="text"
                          name="academics"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Specify your stream (Eg. Btech,Bsc,..)"
                          className="form-control w-50 mx-auto"
                      ></Field>
                      <div className="text-danger">{errors.academics && touched.academics && errors.academics}</div>

                      <label htmlFor="us" className="form-label mt-2">Contact:</label>
                      <Field
                          type="number"
                          name="contact"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter mobile"
                          className="form-control w-50 mx-auto"
                      ></Field>
                      <div className="text-danger">{errors.contact && touched.contact && errors.contact}</div>

                      <label htmlFor="us" className="form-label mt-2">Email:</label>
                      <Field
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter mail here"
                          className="form-control w-50 mx-auto"
                      ></Field>
                      <div className="text-danger">{errors.email && touched.email && errors.email}</div>

                      <div>
                          <button type="submit" className="btn btn-outline-dark mx-1 mt-4" onClick={handleSubmit}>Submit</button>
                      </div>
                  </form>
              )
          }

            </Formik>
        </div>

    </div>
)
};

export default Register;
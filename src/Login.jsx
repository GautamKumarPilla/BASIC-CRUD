import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Field, Formik } from "formik";
import * as Yup from 'yup';

const Login =()=>{

    useEffect(() =>{

        },[])
        
        const navigate = useNavigate();

        return(
            <div className="mt-5">
                <div className="w-25 mx-auto">
                    <Formik
                        initialValues={{
                            username:'',
                            password:''
                        }}
                        
                        onSubmit={(values,x)=>{
                            console.log(values);
                            axios.post(`http://localhost:4500/admin?username=${values.username}&password=${values.password}`,values)
                            .then((res)=>{
                                console.log(res.data);
                                console.log(res.data.length);

                                if(res.data.length===1){
                                    alert("Login Success");
                                    navigate('/adminUser');
                                }
                                else{
                                    alert("credentials are invalid");
                                }
                                console.log(x.resetForm);
                            })
                            .catch((err)=>{
                                console.log("error-occured:",err)
                            })
                        }}
    
                        validationSchema={Yup.object({
                            username:Yup.string().required('*enter your username'),
                            password:Yup.string().required('*enter your password')
                        })}
                    >
                    
                    {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit, 
                    
                    }) => (
                    <form onSubmit={handleSubmit} className="form-control border border-3 mt-5 shadow-lg p-4 mb-5" style={{backgroundColor: 'lightsalmon'}}>
                        <h2 className="border-bottom">Login</h2>
                        <label htmlFor="us" className="form-lable mt-2">Username</label>
                        <Field
                        type="text"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        placeholder="Enter username"
                        className="form-control"
                        ></Field>
                        <div className="text-danger">{errors.username && touched.username && errors.username}</div>
    
                        <label htmlFor="ps" className="form-lable mt-2">Password</label>
                        <Field
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Enter password"
                        className="form-control"
                        ></Field>
                        <div className="text-danger">{errors.password && touched.password && errors.password}</div>
                        
                        <div className="mt-1">
                            <small>
                                <Link to="">Forgot password?</Link>
                            </small>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-dark w-25 mx-1 mt-2">Login</button>
                        </div>
                        <div className="mt-3">
                            <small>
                                Don't have account? &nbsp;<Link to="/register">Sign Up</Link>
                            </small>
                        </div>
                    </form>
                    )}
    
                    </Formik>
                </div>
            </div>
    )
    };

export default Login;
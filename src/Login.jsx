import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login =()=>{
    const teleport = useNavigate();

    useEffect(() =>{
        },[])
       
        
    return(
    <div className="mt-5">
    <div className="w-25 mx-auto">
        <form className="form-control bg-dark">
            <h3 className="text-primary text-center">Login</h3>
            <label htmlFor="" className="form-lable mt-2 text-success">Username</label>
            <input type="text" required placeholder="Enter username" className="form-control" />
            <label htmlFor="" className="form-lable mt-2 text-danger">Password</label>
            <input type="password" required placeholder="Enter password" className="form-control"/>
            <div className="mt-2">
            <Link to="/mail" className="text-warning text-decoration-none"><p>Forgot Password?</p></Link>
            </div>
            <div className="d-flex justify-content-center">
            <button className="btn btn-outline-light border border-3 border-info mt-2" onClick={()=>{teleport('/')}}>Submit</button>
            </div>
        </form>
        <Link to="/signup" className="text-light">Don't have an account yet?(SignUp)</Link>
    </div>
    </div> 
    )
}; 

//style={{onhover:'backgroundColor:blue'}}

export default Login;
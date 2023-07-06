import { Link, Outlet } from 'react-router-dom';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <div className='bg-light'>
      <img className='bg-dark p-2' src="https://edupoly.in/common/assets/edupoly-logo-dark.png" alt="Edupoly" height={'50px'} width={'150px'} />
        <div className='d-flex justify-content-evenly'>
        <Link to='/register'><h5 className='mt-2'>Register</h5></Link>
        <Link to='/login'><h5 className='me-2 mt-2'>Login</h5></Link>
        </div>
      </div>
        <Outlet />
    
    </div>
  );
}

export default App;

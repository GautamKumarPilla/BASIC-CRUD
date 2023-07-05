import { Link, Outlet } from 'react-router-dom';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className='App'>
        <Link to='/register'><h2>Registration Form</h2></Link>
        <Outlet />
    </div>
  );
}

export default App;

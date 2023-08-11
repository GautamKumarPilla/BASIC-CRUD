import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='bg-warning-subtle border rounded-5 w-75 mx-auto p-2 mt-2'>
       <span className=''>
          <Link to='/Meme' className='text-warning-emphasis text-decoration-none ms-5 me-5'>Meme App</Link>
          <Link to='/Lorem' className='text-primary-emphasis text-decoration-none ms-5 me-5'>Random-Word App</Link>
          <Link to='/Number' className='text-danger-emphasis text-decoration-none ms-5 me-5'>Number-Gen App</Link>
          <Link to='/Gender' className='text-info-emphasis text-decoration-none ms-5 me-5'>Gender App</Link>
       </span>
            
       <div>
        <Outlet></Outlet>
       </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import CForm from './CForm';
import UpdateForm from './UpdateForm';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Link to="/course"><h2>&#8594;Courses&#8592;</h2></Link>
      <Outlet></Outlet>
      
    </div>
  );
}

export default App;

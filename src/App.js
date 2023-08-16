import { Link,Outlet} from 'react-router-dom';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';


function App() {
   const [dev, setDev] = useState([]);

    useEffect(()=>{
      axios.get('http://localhost:4600/customers').then((res)=>{
        console.log(res.data);
        setDev([...res.data]);
      })
    },[])
const del=(event)=>{
   console.log(event._id);
   const id = event._id;
   axios.delete(`http://localhost:4600/delete/${id}`)
   console.log(dev);
}
  return (
    <div>
    <div className='d-flex justify-content-center mt-3'>
    <table className='table table-bordered w-50' style={{backgroundColor:'#e9c46a',padding:'3px'}}>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
      {
          dev && dev.map((a,i)=>{
          return(
              <tr>
                <td>{a.firstname}</td>
                <td>{a.lastname}</td>
                <td>{a.age}</td>
                <td><button onClick={()=>{del(a,i)}} className='btn btn-info'>Delete</button></td>
                <td><button className='btn btn-info'><Link to={`/update/${a._id}`} className='text-decoration-none'>Update</Link></button></td>
              </tr>
          )
          })
        }
         </table>
    </div>
      
        <br/>

        <div className='d-flex justify-content-center'>
        <button><Link to='/add'>Add device</Link></button>
        </div>
       
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;

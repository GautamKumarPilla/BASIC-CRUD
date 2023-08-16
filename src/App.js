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
    <table border={5} cellSpacing={5} cellPadding={2} style={{backgroundColor:'seagreen'}}>
      {
          dev && dev.map((a,i)=>{
          return(
              <tr style={{border:'2px solid black'}}>
                <td>{a.firstname}</td>
                <td>{a.lastname}</td>
                <td>{a.age}</td>
                <td><button><Link to={'/add'}>Add</Link></button></td>
                <td><button onClick={()=>{del(a,i)}}>Delete</button></td>
                <td><button><Link to={`/update/${a._id}`}>Update</Link></button></td>
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

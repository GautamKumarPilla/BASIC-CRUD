import React from 'react';
import {Link, Outlet } from 'react-router-dom';
import { useDeleteDeviceByIdMutation, useGetDeviceallQuery } from '../Services/Devices';
function Device() {

 // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetDeviceallQuery()
  const [ del, x ] = useDeleteDeviceByIdMutation()
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  console.log(data);
  
  return (
    <div>
      <button><Link to='/add'>Add a device</Link></button>
      <h1>Devices Data</h1>
        { error ? (<>Oh no, there was an error</>)
          : isLoading ? (<>Loading...</>)
          : data ? (<table className='table'> {
            data.map((a,i)=>{
              return <tr>
                  <td>{a.brand}</td>
                  <td>{a.color}</td>
                  <td>{a.ram}</td>
                  <td>{a.price}</td>
                  <td><button onClick={()=>{del(a._id)}}>Delete</button></td>
                  <Link to={`/updateDevice/${a._id}`}>Edit</Link>
              </tr>
            })
          } </table>) 
          : null
        }
        <Outlet></Outlet>
    </div>
  )
}

export default Device;
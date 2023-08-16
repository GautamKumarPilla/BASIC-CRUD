import React from 'react';
import {Link, Outlet } from 'react-router-dom';
import { useDeleteDeviceByIdMutation, useGetDeviceallQuery } from '../Services/Devices';

const Device=()=> {
 // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetDeviceallQuery()
  const [ del, x ] = useDeleteDeviceByIdMutation()
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  console.log(data);
  
  return (
    <div className=''>
      <button className='btn btn-dark m-1'><Link to={`/addDevice`} className='text-decoration-none text-danger'>Add a device</Link></button>
      <Outlet></Outlet>
      <h1>Device Data</h1>
        { error ? (<>Oh no, there was an error</>)
          : isLoading ? (<>Loading...</>)
          : data ? (<div className='spacing'> {
            data.map((a,i)=>{
              return <tr className='card'>
                  <td>Brand : {a.brand}</td>
                  <td>Color  : {a.color}</td>
                  <td>RAM : {a.ram}</td>
                  <td>Price : {a.price}</td>
                  <td><button onClick={()=>{del(a._id)}} className='btn btn-outline-danger me-3' style={{columnGap:'4px'}}>Delete</button>
                  <button className='btn btn-outline-primary'><Link to={`/updateDevice/${a._id}`} 
                  className='text-decoration-none text-dark'>Edit</Link></button>
                  </td>
              </tr>
            })
          } </div>) 
          : null
        }
        
    </div>
  )
}

export default Device;
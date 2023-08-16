import React from 'react';
import { useParams } from 'react-router';
import { useGetDeviceByIdQuery } from './Services/Devices';
import Update from './Update';

const Form=()=> {
  var { id } = useParams();
  console.log("id",id);
  const { data, error, isLoading } = useGetDeviceByIdQuery(id)
  console.log("Updateid",data)
  return (
    <div className='mt-3'>
      <h1>Update Device</h1>
      <div>{data && <Update dev={data} ></Update>} 
      </div>
    </div>
  )
}

export default Form;
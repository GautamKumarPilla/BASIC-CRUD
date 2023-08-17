import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import UpdateCustomer from "./UpdateCustomer";

const Customer=()=>{
    var {id}=useParams();
    console.log(id);
    var[cus,setCus] = React.useState(null);

    useEffect(()=>{
        axios.get(`http://localhost:4600/customers/${id}`)
    .then((res)=>{
        console.log(res.data);
        setCus({...res.data})
    },[id])
    },[])

        return(
            <div>
                <h1>Update customer</h1>
                {
                cus && <UpdateCustomer cus={cus} id={id}></UpdateCustomer>
                }
            </div>
        )
}

export default Customer;
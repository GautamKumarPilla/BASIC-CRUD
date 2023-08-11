import React from 'react';
import axios from 'axios';
import Card from './Card';

function Prof() {
  const [users, setUsers] = React.useState(null)
  const url="https://random-data-api.com/api/v2/users?response_type=json"
  React.useEffect(()=>{
    axios.get(url).then((res)=>{
      console.log(res.data);
       setUsers({...res.data})
    })
  },[])

  const user = ()=>{
    axios.get(url).then((res)=>{
       setUsers({...res.data})
    })
}
 return (
    <div className="App">
       <div className='container'>
            {users && <Card users={users} ></Card>}
            <button onClick={user}>Get Random User</button>
      </div>
    </div>
  );
}

export default Prof;
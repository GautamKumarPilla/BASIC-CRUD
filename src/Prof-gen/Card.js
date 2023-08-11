import React from 'react'

function Card(props) {
    console.log(props)
    var users = props.users;
  return (<div className='card'>
            <img className='img-container' src={users.avatar} alt=""></img> 
            <div className='details'>
              <h2>{users.first_name}</h2>
               <p>{users.address.city}</p>
               <p>{users.employment.title}</p>
            </div>
        </div>
       
  )
}
export default Card;
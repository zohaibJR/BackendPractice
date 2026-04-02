import React, { useEffect, useState } from 'react'
import axios from 'axios'


function DisplayingUsers() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/api/users/getusers")
        .then(res=>{
            setUsers(res.data)
        })
        .catch(err=>{
            console.log(error)
        })
    },[])
  return (
    <div>
        <h1>All Users</h1>
      {users.map((user)=>(
        <div key={user._id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
      
    </div>
  )
}

export default DisplayingUsers

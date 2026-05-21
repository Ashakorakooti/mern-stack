import React,{useEffect,useState} from 'react'

const UseEffectApi = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default UseEffectApi
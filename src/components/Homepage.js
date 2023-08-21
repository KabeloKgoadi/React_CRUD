import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
    const data = Object.keys(localStorage);
    let navigate = useNavigate();

    function handleDelete (id)
    {
        localStorage.removeItem(id);
        window.location.reload();
    }
    
  return (
    <>
        <button><Link to={`/create`}>Add Members</Link></button>
      {data.map((value,id) => {
        const user = JSON.parse(localStorage.getItem(value));
        console.log(user)
        return (
            <div key={id}>
             { console.log(user.name)}
            <h1>{user.name}</h1>
            <p>{user.title}</p>           
            <button ><Link to={`/update/${id}`}>Update</Link></button>
            <button onClick={() => handleDelete(id)}>Delete</button>
            </div>     
                       
        )
      })}
      
    </>
  )
}

export default Homepage

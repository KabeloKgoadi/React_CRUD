import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function UpdateMember() {
    const {id} = useParams();
    console.log(id)
    const members = JSON.parse(localStorage.getItem(id));
    const [name, setName] = useState(members.name)
    const [title, setTitle] = useState(members.title)
    const handleUpdate =  (e) => {
        e.preventDefault();

        localStorage.setItem(id, 
            JSON.stringify({name: name, title: title}))
    }
  return (
    <div>
        <form onSubmit={handleUpdate}>
          
                <input type = "text"
                onChange={e => setName(e.target.value)}>
                </input>
                <input type = "text"
                onChange={e => setTitle(e.target.value)}>
                </input>
                <button>Update member</button>
          
        </form>
      
    </div>
  )
}

export default UpdateMember

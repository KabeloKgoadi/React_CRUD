import React from 'react'
import { useState } from 'react';

function AddMembers() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault();     
        let id = localStorage.length;
        let userid = id++;
        localStorage.setItem(
          userid,JSON.stringify({name : name, title : title, file: image})
        )

   };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
    <div className="form-control">
        <input type="text"
         placeholder="Full Names"
         value={name} 
         onChange={(e) => setName(e.target.value)}
         />
    </div>

    <div className="form-control">
        <input type="text"
         placeholder="Job Title" 
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         />
    </div>

    <input type="submit" value="Add Member"></input>
</form>
  )
}

export default AddMembers

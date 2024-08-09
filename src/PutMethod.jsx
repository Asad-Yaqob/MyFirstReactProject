import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PutMethod = () => {
    const [post, setPost] = useState({
        title : '',
        body :  ''
    });

    useEffect(() => {
        //With Axios
    //     axios.get('https://jsonplaceholder.typicode.com/posts/1',{post}).then((response) => {
    //    console.log(response.data);

     fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
        response.json().then((result) => console.log(result));
     });
        }, []);
  
    const handleInput = (e) => {
     setPost({
        ...post, [e.target.name] : [e.target.value]
     });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
       
      //with axios...
    //   axios.put('https://jsonplaceholder.typicode.com/posts/1',{post}).then((response)=> {
    //     console.log(response.data);
    //   });

    //With fetch method
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PUT',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(post)
    }).then((response) => response.json()).then((result) => console.log(result));

      setPost({
        title: ' ',
        body: ' '
      })

    }

  return (
    < >
        <h2>PutMethod</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='Update Title' value={post.title} onChange={handleInput} />
            <br />
            <input type="text" name='body' placeholder='Update Body' value={post.body} onChange={handleInput} />
            <br /> 
            <button onSubmit={handleSubmit}>Update</button>
        </form>
    </ >
  )
}

export default PutMethod
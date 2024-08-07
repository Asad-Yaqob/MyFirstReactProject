import React, { useState } from 'react'
import axios from 'axios'

 const Post_Api = () => {
const [post, setPost] = useState({
    title : '',
    body : ''
})

const handleInput = (e) => {
    setPost({
       ...post, [e.target.name] : [e.target.value]
    })
   }

  const  handleSubmit = async (e) => {

      e.preventDefault();
    //   try {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts', 
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type' : 'application/json'
    //             },
    //             body: JSON.stringify(post)

    //         }
    //     )
    //     const data = await response.json();
    //     console.log(data)

    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    axios.post('https://jsonplaceholder.typicode.com/posts', {post}).then((response) => {
        console.log(response);
    })
  }
    
  return (
    < >
    <h2>Post Method</h2>
    <form onSubmit={handleSubmit} >
        <input type="text" name='title' onChange={handleInput} value={post.title} placeholder='Tile...' /> <br />
        <input type="text" name='body' onChange={handleInput} value={post.body} placeholder='body...' />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </form>
    </ >

  )
}

export default Post_Api

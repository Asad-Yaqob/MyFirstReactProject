import axios from 'axios';
import React, { useState } from 'react'

const PostMethod = () => {
  //state variable for storing the data
  const [post, setPost] = useState({
    title : '',
    body : ''
  });

 //function to handle input change
 const handleInput = (e) => {
  setPost({
    ...post, [e.target.name] : [e.target.value]
  });
 }

  //function to send data
const handleSubmit = async (e) => {
e.preventDefault();

// Post api with  fetch request with async and await syntax
// try {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type' : 'application/json'
//     },
//     body : JSON.stringify(post)
//   });
//   const data =  await response.json();
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// Post api with axios
axios.post('https://jsonplaceholder.typicode.com/posts', {post}).then((response) => {
console.log(response);
});

}
  return (
    < >
    <h2>Post Api Method</h2>
    <form onSubmit={handleSubmit} >
      <input type="text" onChange = {handleInput} name = 'title' value={post.title} placeholder='Post Title...'/> <br /> <br />
      <input type="text" onChange = {handleInput} name = 'body' value={post.body} placeholder='Post Body...' />  
      <br /> <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
    </ >
    
  )
}

export default PostMethod
import axios from 'axios';
import React, { useEffect, useState } from 'react'

 const GetMethod = () => {
  const [data, setData]  = useState([]);
  useEffect(() => {
    console.log("Working")
 
    //Fetch method
    // fetch('https://jsonplaceholder.typicode.com/comments').then((response) => {
    //     response.json().then((result) =>{
    //          setData(result); });
    
    //Axios library
    axios.get('https://jsonplaceholder.typicode.com/comments').then((response) => {
        setData(response.data)
     });
    },[])
    
  return (
    < >
    <h2>Get Api Method</h2>
    <table border={1}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
           {
            data.map((value, index) => (
                <tr key={index}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.body}</td>
            </tr>
            ))
           }
        </tbody>
    </table>
    </ >
  )
}

export default GetMethod
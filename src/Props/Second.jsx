import React, { useState } from 'react'
import Third from './Third'

//One way of using prop
// const Second = (props) => {
//   return (
//     < >
//     <h2> Second Component</h2>
//     <h4>Count: {props.data}</h4>
//     <Third />
//     </ >
//   )
// }

//Another the professional way is below..
const Second = ({data}) => {
      
    const [info, setInfo] = useState([]);
    const getInfo = (value) => {
        setInfo(value);
    }
    console.log(info)
    return (
      < >
      <h2> Second Component</h2>
      <h4>Count: {data}</h4>
      <br />
      {/* <h4>Name: {info[0].name} </h4>
      <h4>Gender: {info[0].gender} </h4> */}

      <Third getData ={getInfo} />
      </ >
    )
  }

export default Second
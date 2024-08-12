import React, { useContext, useState } from 'react'
import Second from './Second'
import { myData } from '../App';
const First = () => {
    const [count, setCount] = useState(0);

    const {data} = useContext(myData);
  return (
    < >
    <h2>First Component</h2>
    <h4>Context Api : {data} </h4>
    <Second data = {count} />
    <button onClick={() => setCount(count + 1)} > Increment Count</button>
    </ >
  )
}

export default First
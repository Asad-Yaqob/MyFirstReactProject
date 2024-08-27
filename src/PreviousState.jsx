import React, { useState } from 'react'

const PreviousState = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount((prev) => {
            console.log(prev);
           return  count + 1
        });
    }
  return (
    <>
    <h2>PreviousState</h2>
    <p>Counter: {count}</p>
    <button  onClick={handleClick}>Increment</button>
    </>
  )
}

export default PreviousState
import React from 'react'
import useCounter from './useCounter';


const MyCounter = () => {
    const [count,increment, decrement] = useCounter();
  return (
    <>
    <h2>MyCounter: {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default MyCounter
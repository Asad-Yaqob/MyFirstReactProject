import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmout } from '../redux/slice/counter_slice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrmentAmount] = useState(2);
  return (
    < >
    <h2>Using Redux </h2><br />
    <p>Counter value : {count} </p><br />
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button><br />
    <input type="number" value={incrementAmount}  onChange={(e) => setIncrmentAmount( e.target.value) } /><br />
    <button onClick={() => dispatch(incrementByAmout(Number(incrementAmount || 0)))}>Increment By Amount</button>
    </ >
  )
}

export default Counter
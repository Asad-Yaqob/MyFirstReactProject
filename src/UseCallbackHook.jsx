import React, { useCallback, useState } from 'react'
import Example from './Example';

const UseCallbackHook = () => {
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(10);

    const newScore = useCallback(() => {
console.log('Im a Function');
    }, [score])
  return (
    <>
    <h2>UseCallbackHook</h2>
    <p>Count {count}</p>
    <button onClick={() => setCount(count + 1)}>Count</button>
    <Example data = {score} func = {newScore} />
    <button onClick={() => setScore(score * 2)}>Score</button>
    </>

  )
}

export default UseCallbackHook
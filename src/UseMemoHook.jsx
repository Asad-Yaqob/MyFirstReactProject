import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(10);

    const heavy = useMemo(() =>  {
       console.log('Function is called');
       score * 2;
    }, [score]
)
  return (
    < >
    <h2>UseMemoHook</h2>
    <p>Count {count}</p>
    <button onClick={() => setCount(count + 1)}>Count</button>
    <p>Score {score}</p>
    <button onClick={() => setScore(score * 2)}>Score</button>
    <h4>Heavy : {score}</h4>

    </ >
  )
}

export default UseMemoHook
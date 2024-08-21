import React, { createContext, useState } from "react";
import First from "./Props/First";
import Counter from "./reducer_work/Counter";
import UseReducerHook from "./UseReducerHook";
import UseMemoHook from "./UseMemoHook";
import UseCallbackHook from "./UseCallbackHook";

export const myData = createContext();

const App = () => {
  const [score, setScore] = useState(20);
  // let [count, setCount] = useState(0);
  return (
    <myData.Provider value={{data : score}} >
    {/* <h2>My First Component</h2>
    <h2>Count: {count}</h2>
    <button onClick={() => setCount(count++)}>Counter</button>
     */}
     {/* <UseEffectHook /> */}
     {/* <UseStateHook /> */}
     {/* <GetMethod /> */}
     {/* <PutMethod /> */}
     {/* <First /> */}
     {/* <Counter /> */}
     {/* <UseReducerHook /> */}
     {/* <UseMemoHook /> */}
     <UseCallbackHook /> 
     </ myData.Provider>
  )
}

export default App
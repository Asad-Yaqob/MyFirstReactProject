import React from "react";
import  UseEffectHook from "./UseEffectHook";
import { UseStateHook } from "./UseStateHook";

const App = () => {
  // let [count, setCount] = useState(0);
  return (
    <>
    {/* <h2>My First Component</h2>
    <h2>Count: {count}</h2>
    <button onClick={() => setCount(count++)}>Counter</button>
     */}
     {/* <UseEffectHook /> */}
     <UseStateHook />
     </>
  )
}

export default App
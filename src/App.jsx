import React from "react";
import  UseRefHook  from "./UseRefHook";
import  RefExample  from "./RefExample";



const App = () => {
  // let [count, setCount] = useState(0);
  return (
    <>
    {/* <h2>My First Component</h2>
    <h2>Count: {count}</h2>
    <button onClick={() => setCount(count++)}>Counter</button>
     */}
     {/* <UseEffectHook /> */}
     {/* <UseStateHook /> */}
     {/* <UseRefHook /> */}
     <RefExample />
     </>
  )
}

export default App
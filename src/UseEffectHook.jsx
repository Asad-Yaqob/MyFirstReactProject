import React from "react";
import {useEffect,useState} from "react";

//Function Base Component Name "UseEffectHook"
let UseEffectHook = () => {
    const [name,setName] = useState("Name");
    const [count,setCount] = useState(0);

    //UseEffect Hook 
    useEffect(() => {
      console.log("Data Base Related Query..");
    }, []
)

    return (
        <> {/*React Fragment it does not use extra space. used when we dont want to style the div*/ } 
        <h2>Use Effect Hook</h2>
        <h2>Name: {name}</h2>
        <h2>Count: {count}</h2>
        <button onClick={() => setName("Asad")}>Change Name</button>
        <button onClick={() => setCount(count + 1)}>Change Count</button>
        </>
    )
}

export default UseEffectHook
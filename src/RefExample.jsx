import React from 'react'
import { useRef,useState } from "react";

 const RefExample = () => {
    const [message, setMessage] = useState();
    const myRef = useRef(null);
    
    const updateInput = () => {
        const password = myRef.current.value;
        if (password.length > 6) {
            setMessage("Only 6 digits allowed!!!")
            myRef.current.value = password.slice(0,6)
            // alert("Only 6 digits allowed")
        }
        else{
            setMessage(" ");
        }
    }
  return (
    <>
       <h2>RefExample</h2> 
       <input type="text" ref={myRef} onChange={updateInput} />
       {
        message && <p>{message}</p>
       }
    </>
  )
}

export default RefExample

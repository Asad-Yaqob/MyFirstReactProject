import React from 'react'
import { useRef } from "react";

 const UseRefHook = () => {
    const myRef = useRef();
    const handleChange = () => {
        myRef.current.value = "Jhon doe"
        myRef.current.style.backgroundColor = "Green"
    }
  return (
    <>
    <h2>UseRefHook</h2>
    <input type="text" ref={myRef}  placeholder= "Enter Your name" />
    <button onClick={handleChange}>Update</button>
    </>
  )
}


export default UseRefHook
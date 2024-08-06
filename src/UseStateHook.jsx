import React from 'react'
import { useState } from 'react';

 const UseStateHook = () => {
    const [name, setName] = useState("Jhon Doe...");
    const [age, setAge] = useState(20);
    const [like, setLike] = useState(true);
    const [count, setCount] = useState(0);

   let  handleChange = (e) => setLike(e.target.checked);
  return (
    <>
    <h2>UseStateHook</h2>
    <h4>Example 1</h4>
    <input  value={name} onChange = {e => setName(e.target.value) }  /> 
    <br />
    <br />
    <button onClick={() => setAge(age + 1)}>Increment Age</button>
    <p>Hello {name}, Your age is {age}</p>
    <br />
    <h4>Example 2</h4>
    <label>
    <input type="checkbox" checked={like} onChange={handleChange} />
    I liked this
    </label>
    <p>You {like ? "Like" : "did not like" } this.</p>
    <br />
    <h4>Example 3</h4>
    <button onClick={() => setCount(a => a + 1)}>You pressed me {count} times</button>
    </>
  )
}

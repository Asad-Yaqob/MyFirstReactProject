import React, { createContext, useState } from "react";
import Form from "./Form";


export const myData = createContext();

const App = () => {
  const [score, setScore] = useState(20);
  // let [count, setCount] = useState(0);
  return (
    <myData.Provider value={{data : score}} >
    {/* <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
    </BrowserRouter> */}
    {/* <PreviousState /> */}
    <Form />
     </ myData.Provider>
  )
}

export default App
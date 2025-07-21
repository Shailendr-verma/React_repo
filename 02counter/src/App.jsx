// import React from 'react'
import { useState } from 'react';
function App() {
//this is useState here, counter is a variable and setCounter is a function 
const [counter, setCounter] = useState(0);

  // addButton 
  const addValue = () => {
    setCounter(counter + 1)
    console.log(counter);
  }
 // remove button 
  const removeValue = () => {
    setCounter(counter - 1);
    console.log(counter);
  }
  // reset button 
  const reset =()=>{
    setCounter(0);
    console.log(counter); 
  }
  return (
    <>

      <h1>React course with shailendra verma :    {counter}</h1>
      <h2> counter vlaue: {counter}</h2>
      <button onClick={addValue}>add value</button> {" "}
      <button onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App

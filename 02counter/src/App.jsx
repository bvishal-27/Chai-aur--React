import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import './App.css'

function App() {

  let [counter ,setCounter] =useState(0)
  //let counter= 15
const addValue = ()=>{
  console.log("value added", counter);
  //counter = counter+1
  setCounter(prevCounter=>prevCounter+1)
  setCounter(prevCounter=>prevCounter+1)
  setCounter(prevCounter=>prevCounter+1)
}
const removeValue = ()=>{
  console.log(" Updated Value", counter);
  //counter = counter-1
  setCounter(counter-1)
}

  return (
    <>
    
     <h1>React</h1>
     <h2>Counter Value :  {counter}  </h2>
     <button
     onClick={addValue}
     > Add value </button>
     <br />
      <button 
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App




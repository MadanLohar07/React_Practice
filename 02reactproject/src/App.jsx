import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(10);

  const addvalue = () => {
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1); //callback function execute one by one... //fibre send data in batch..
  }

  const removevalue = () => {
    setCounter(counter - 1);
  }
 // let counter = 15

  // const addvalue = () => {
  //  if (counter + 2 <= 20){
  //   setCounter(counter + 2)
  //  }
  //  else{
  //   setCounter(20);
  //  }
   
  // }

  // const removevalue = () => {
  //   if (counter - 2 >= 0) {
  //       setCounter(counter - 2);
  //   }
  //   else {
  //     counter(0);
  //   }
    
   
  
  return (
    <>
      <h1> This is 02 Reactjs Project.</h1>
      <h1>Count : {counter}</h1>

      <button onClick={addvalue}>Add Value</button>
      <br/>
      <button onClick={removevalue}>Remove Value </button>
    </>
  )
}

export default App

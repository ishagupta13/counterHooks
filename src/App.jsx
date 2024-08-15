import { useState } from 'react'  //hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter ,setCounter]= useState(15)

  //let counter = 15

  const addValue = () =>{
    console.log("clicked" , counter);
    counter = counter+1;
    setCounter(counter)

  }

  const subValue =() =>{
    counter = counter-1;
    setCounter(counter)
  }

  return (
   <>
   <h1> chai aur react</h1>
   <h2> counter val: {counter}</h2>

   <button 
   onClick={addValue}
   > Add val {counter} </button>
   <br />
   <button 
   onClick={subValue}
   > remove val {counter} </button>
   </>
  )
} 

export default App

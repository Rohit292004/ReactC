import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1)

  // let counter = 5

  
  const addValue = () => {
    // counter = counter + 1
    if(counter <= 19){
    setCounter(counter + 1)
    }
      // console.log("clicked", counter)

  }

  const removeValue = () => {
    if(counter >= 1){
    setCounter(counter - 1)
  }
}
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter Value : {counter}</h2>

    
     <button 
     onClick  = {addValue}
     >Add Value</button>
     <br></br>
     <button
     onClick={removeValue}
     >Decrease Value</button>
    </>
  )
}

export default App

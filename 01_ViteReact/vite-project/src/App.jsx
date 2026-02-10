import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from '/src/chai.jsx'

function App() {
  let [counter, upCounter] = useState(15)

  function addValue() {
    counter = counter + 1
    upCounter(counter)
  }
  function removeValue() {
    if (counter > 0) {
       upCounter(counter - 1) }
      else{
        counter=0
      }
  }
  return (
    //  <Chai/>
    <>
      <h1>Concept of useState:{counter}</h1>
      <button onClick={addValue}>Add value</button><br></br>
      <br></br>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App

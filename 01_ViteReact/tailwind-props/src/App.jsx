import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  const user ={
    userName:"Subham",
    age:19
  }

  return (
    <>
     <h1 class="text-3xl font-bold underline bg-amber-500" >
    Hello world!
  </h1>
  <Card username={"Subham"} text="hi"/>
    
    </>
  )
}

export default App

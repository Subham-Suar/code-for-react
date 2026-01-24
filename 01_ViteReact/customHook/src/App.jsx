import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './hook/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  

  return (
   <>
     <InputBox/>
    </>
  )
}

export default App

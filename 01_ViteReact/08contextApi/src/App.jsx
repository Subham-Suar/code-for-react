import React,{ useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import UserContext from './context/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'
import Button from './components/Button'

function App() {
//   // const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
    <h1>Login Page</h1>
     <Login />
     <Profile/>
     {/* <Button/> */}
   </UserContextProvider>
  )
}

 export default App

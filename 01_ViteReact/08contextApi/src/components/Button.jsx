import React from 'react'
import UserContext from './context/UserContext'
function Button() {
    const {theme}= useContext(UserContext)
    const printTheme =()=>{
     console.log(theme)
    }
  return (
    <>
    <button onClick={printTheme}>Click</button>
    </>
  )
}

export default Button
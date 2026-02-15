import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import UserContextProvider from '../context/UserContextProvider'

function Profile() {
  const { user,theme } = useContext(UserContext)
    if (!user) return <div>Please log-in</div>

      return <div>Welcome {user.username }</div>
}

 export default Profile
import { Navigate } from "react-router-dom"
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

export default function Logout({setUserToken}) {

  const userToken = useContext(UserContext)

  const handleLogout = (e) => {
    e.preventDefault()
    setUserToken(null)
  }

  if(!userToken) {
    return <Navigate to="/login"/>
  } else {
    return(
      <>
        <p>Are you sure you want to logout?</p>
        <button onClick={handleLogout}>Logout</button>
      </>
    )
  }

}
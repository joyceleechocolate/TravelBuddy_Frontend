import Form from "../components/Form"
import { useState } from 'react';
import { register } from '../api/authApi';
import {Navigate} from 'react-router-dom';



export default function Register({handleInputChange, formData}) {

  const [responseMsg, setResponseMsg] = useState("")
  const [shouldRedirect, setShouldRedirect] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    const context = {username: formData.username, password: formData.password}
    const response = await register(context)
    if(response.password) {
      setShouldRedirect(true)
    } else {
      setResponseMsg(response.username)
    }
  }

  if (shouldRedirect) {
    return <Navigate to="/login"/>
  } else {
    return <Form formType={"Register"} handleInputChange={handleInputChange} formData={formData} handleSubmit={handleSubmit} responseMsg={responseMsg}/>
  }

}
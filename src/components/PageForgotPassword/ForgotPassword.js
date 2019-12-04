import React from 'react'
import { 
  useParams,
  useLocation 
} from 'react-router-dom'

function ForgotPassword() {

  const { id } = useParams()
  const obj = JSON.parse(id)
  // const location = useLocation()

  console.log(obj.password)

  return (
    <>
      Forgot Password
      <br />
      { obj.username }
    </>
  )
}

export default ForgotPassword

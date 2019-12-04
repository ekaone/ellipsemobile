import React from 'react'
import { 
  useParams,
  useLocation 
} from 'react-router-dom'

function ForgotPassword() {

  const { id } = useParams()
  const location = useLocation()

  console.log(location.state.data)

  return (
    <>
      Forgot Password
      <br />
      {/* {location} */}
    </>
  )
}

export default ForgotPassword

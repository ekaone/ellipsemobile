import React from 'react'
import { 
  useParams,
} from 'react-router-dom'

// components unit
import HeaderAppBarLaborWorked from './HeaderAppBarLaborWorked'

function LaborWorked() {
  // const { id } = useParams()
  // const obj = JSON.parse(id)

  return (
    <>
    <HeaderAppBarLaborWorked />
    <br />
      Labor Worked
    </>
  )
}

export default LaborWorked

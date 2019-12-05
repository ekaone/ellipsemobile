import React from 'react'
import { 
  useParams
} from 'react-router-dom'

// components unit
import { ItemsInspectComponents } from './Data'

function Defect() {

  const { id } = useParams()
  const obj = JSON.parse(id)

  return (
    <>
      Defect {obj}
    </>
  )
}

export default Defect

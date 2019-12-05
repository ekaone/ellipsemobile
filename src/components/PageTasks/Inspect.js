import React from 'react'
import { 
  useParams
} from 'react-router-dom'

const { id } = useParams()
const obj = JSON.parse(id)

function Inspect() {
  return (
    <>
      Inspect
    </>
  )
}

export default Inspect

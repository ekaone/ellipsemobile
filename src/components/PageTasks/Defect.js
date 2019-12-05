import React from 'react'
import { 
  useParams
} from 'react-router-dom'

// components unit
import HeaderAppBarDefect from './HeaderAppBarDefect'
import { ItemsInspectComponents } from './Data'

function Defect() {

  const { id } = useParams()
  const obj = JSON.parse(id)

  return (
    <>
      <HeaderAppBarDefect />
      Defect {obj}
    </>
  )
}

export default Defect

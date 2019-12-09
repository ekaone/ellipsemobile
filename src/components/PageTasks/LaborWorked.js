import React, { useState } from 'react'
import { 
  useParams,
} from 'react-router-dom'

// components unit
import HeaderAppBarLaborWorked from './HeaderAppBarLaborWorked'

function LaborWorked() {
  const { id } = useParams()
  const obj = JSON.parse(id)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [page, setPage] = useState('Home')

  const addWork = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleCloseOverride = (item) => {
    setAnchorEl(null);
    console.log(item)
    setPage(item)
  };

  const handleCloseCost = (item) => {
    setAnchorEl(null);
    console.log(item)
    setPage(item)
  };

  const handleCloseHome = (item) => {
    setAnchorEl(null);
    console.log(item)
    setPage(item)
  };

  const open = Boolean(anchorEl);

  return (
    <>
    <HeaderAppBarLaborWorked
      addWork={addWork} 
      anchorEl={anchorEl}
      handlerCloseOverride={() => handleCloseOverride('override')}
      handlerCloseCost={() => handleCloseCost('cost')}
      handlerCloseHome={() => handleCloseHome('Home')}
      open={open}
    />
    {obj}
    <br />
      {page}
    </>
  )
}

export default LaborWorked

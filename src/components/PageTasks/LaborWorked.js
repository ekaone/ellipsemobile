import React, { useState } from 'react'
import { 
  useParams,
} from 'react-router-dom'

// components unit
import HeaderAppBarLaborWorked from './HeaderAppBarLaborWorked'
import LaborWorkedHome from './LaborWorkedHome'
import { Items } from './Data'

function LaborWorked() {
  const { id } = useParams()
  const obj = JSON.parse(id)

  const items = Items.find(item => item.id === obj)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [page, setPage] = useState(
      <LaborWorkedHome 
        wo={items.workOrderNumber}
        taskNumber={items.taskNumber} 
      />
    )

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

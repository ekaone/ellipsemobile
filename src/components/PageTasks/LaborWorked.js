import React, { useState } from 'react'
import { 
  useParams,
} from 'react-router-dom'

// components unit
import HeaderAppBarLaborWorked from './HeaderAppBarLaborWorked'
import LaborWorkedHome from './LaborWorkedHome'
import LaborWorkedOverride from './LaborWorkedOverride'
import LaborWorkedCost from './LaborWorkedCost'
import { Items } from './Data'

function LaborWorked() {
  const { id } = useParams()
  const obj = JSON.parse(id)

  const items = Items.find(item => item.id === obj)

  const itemHome = (
    <LaborWorkedHome 
      wo={items.workOrderNumber}
      taskNumber={items.taskNumber}
      date={items.date} 
    />
  )

  const itemOverride = (
    <LaborWorkedOverride 
      wo={items.workOrderNumber}
      taskNumber={items.taskNumber}
    />
  )  

  const itemCost = (
    <LaborWorkedCost 
      wo={items.workOrderNumber}
      taskNumber={items.taskNumber}
    />
  )

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [page, setPage] = useState(itemHome)

  const addWork = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleCloseOverride = (item) => {
    setAnchorEl(null);
    setPage(item)
  };

  const handleCloseCost = (item) => {
    setAnchorEl(null);
    setPage(item)
  };

  const handleCloseHome = (item) => {
    setAnchorEl(null);
    setPage(item)
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  return (
    <>
    <HeaderAppBarLaborWorked
      addWork={addWork} 
      anchorEl={anchorEl}
      handlerCloseOverride={() => handleCloseOverride(itemOverride)}
      handlerCloseCost={() => handleCloseCost(itemCost)}
      handlerCloseHome={() => handleCloseHome(itemHome)}
      handlerClose={handleClose}
      open={open}
    />
    {obj}
    <br />
      {page}
    </>
  )
}

export default LaborWorked

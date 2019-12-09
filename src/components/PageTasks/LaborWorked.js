import React from 'react'
import { 
  useParams,
} from 'react-router-dom'

// components unit
import HeaderAppBarLaborWorked from './HeaderAppBarLaborWorked'

function LaborWorked() {
  const { id } = useParams()
  const obj = JSON.parse(id)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const addWork = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleCloseOverride = (item) => {
    setAnchorEl(null);
    console.log(item)
  };

  const handleCloseCost = (item) => {
    setAnchorEl(null);
    console.log(item)
  };

  const open = Boolean(anchorEl);

  return (
    <>
    <HeaderAppBarLaborWorked
      addWork={addWork} 
      anchorEl={anchorEl}
      handlerCloseOverride={() => handleCloseOverride('override')}
      handlerCloseCost={() => handleCloseCost('cost')}
      open={open}
    />
    {obj}
    <br />
      Labor Worked
    </>
  )
}

export default LaborWorked

import React, { useState } from 'react'
import { 
  useHistory  
} from 'react-router-dom'

// @material-ui/core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// components unit
import View from './View'
import HeaderAppBar from './HeaderAppBar'
import { Items } from './Data'
import TaskDetails from './TaskDetails'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Tasks() {
  const classes = useStyles();
  const history = useHistory();

  // const [detail, setDetail]= useState(null)

  const handleClick = (id) => {
    const item = Items.find(itm => itm.id === id)
    console.log("Data: ", item)
    history.push("/page-tasks/" + item.id)
  }

  // const switchTaskDetails = (id) => {
  //   const item = Items.find(itm => itm.id === id)
  //   const v = (
  //     <TaskDetails 
  //       workOrderNumber={item.workOrderNumber}
  //       workOrderAction={item.workOrderAction}
  //       taskNumber={item.taskNumber}
  //       taskAction={item.taskAction}
  //       equipmentNumber={item.equipmentNumber}
  //       equipmentAction={item.equipmentAction}
  //     />
  //     )
  //   setDetail(v)
  // }

  const vTasks = (
    <>
      <HeaderAppBar />
        <div className={classes.root}>
          <Grid container spacing={1}>
            {
              Items.map(item => (
                <Grid 
                  key={item.id} 
                  item xs={12}
                  onClick={() => handleClick(item.id)}
                >
                  <View 
                    workOrderNumber={item.workOrderNumber}
                    workOrderAction={item.workOrderAction}
                    taskNumber={item.taskNumber}
                    taskAction={item.taskAction}
                    equipmentNumber={item.equipmentNumber}
                    equipmentAction={item.equipmentAction}
                  />
                </Grid>
              ))
            }
          </Grid>
        </div>
    </>
  )

  return (
    <>
      {vTasks}
    </>
  )
}

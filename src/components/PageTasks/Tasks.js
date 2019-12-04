import React from 'react'

// @material-ui/core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// components unit
import View from './View'
import HeaderAppBar from './HeaderAppBar'
import { Items } from './Data'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const handleClick = (id) => {
  console.log(id)
}

export default function Tasks() {
  const classes = useStyles();

  return (
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
                  taskNumber={item.workOrderAction}
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
}

import React, { useState } from 'react'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';

// @material-ui/icons
import ViewModuleIcon from '@material-ui/icons/ViewModule';


// components
import HeaderAppBar from './HeaderAppBar'
import { 
  workOrderStatus,
  workOrderList 
} from './Data'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1, 2)
  },
  textField: {
    width: '100%',
  },
}));

const WorkOrderList = (props) => (
  <>
    <Paper className={props.paper} onClick={props.clickWorkOrder}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <ViewModuleIcon color="secondary" style={{ fontSize: '40px' }} />
        </Grid>
        <Grid item xs={10}>
          <b>Work Order</b> {props.number}
          <br />
          {props.name}
        </Grid>
      </Grid>
    </Paper>
    <br />
  </>
)

function PageInitiateWork() {
  const classes = useStyles();
  const [equipment, setEquipment] = useState('01 FACTORY DEFFECTIVE')
  
  const handleChangeEquipment = event => {
    setEquipment(event.target.value)
  }

  const handleWorkOrder = (name) => {
    console.log(name)
  }

  return (
    <>
      <HeaderAppBar />
      <br />
        <div style={{ padding: '7px' }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField 
                className={classes.textField} 
                margin="dense" 
                value="EX250-0003 EXCAVATOR KOMATSUPC3000-6" 
                id="outlined-basic" 
                label="Equipment Reference" 
                variant="outlined" 
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="outlined-select-wo-status"
              select
              label="WO Status"
              className={classes.textField}
              value={equipment}
              onChange={handleChangeEquipment}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="dense"
              variant="outlined"
            >
              {workOrderStatus.map(option => (
                <MenuItem key={option.id} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>   
            </Grid>
            <Grid item xs={12}>
              <Button style={{ float: "right" }} variant="contained" color="primary">Save</Button>
            </Grid>
          </Grid>
          <br />
          {
            workOrderList.map(wo => (
              <WorkOrderList
                key={wo.id} 
                paper={classes.paper}
                number={wo.number}
                name={wo.name}
                clickWorkOrder={() => handleWorkOrder(wo.name)}
              />
            ))
          }
        </div>
    </>
  )
}

export default PageInitiateWork

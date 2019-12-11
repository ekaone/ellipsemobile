import React, { useState } from 'react'

// components
import HeaderAppBarCreateWo from './HeaderAppBarCreateWo'
import { peopleAssignTo } from './Data'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  form: {
    '& > *': {
      margin: theme.spacing(0),
      width: '100%',
    }
  }
}));

function CreateWorkOrder() {
  const classes = useStyles();

  const [people, setPeople] = useState('Heru Priyanto')

  const handleChangePeople = event => {
    setPeople(event.target.value)
  }

  const TextFieldAssignTo = () => (
    <TextField
      id="outlined-select-wo-status"
      select
      label="Assign To"
      // className={classes.textField}
      value={people}
      onChange={handleChangePeople}
      SelectProps={{
        MenuProps: {
          className: classes.menu,
        },
      }}
      variant="outlined"
    >
      {peopleAssignTo.map(option => (
        <MenuItem key={option.id} value={option.name}>
          {option.name}
        </MenuItem>
      ))}
    </TextField> 
  )

  return (
    <>
      <HeaderAppBarCreateWo />
      <br />
      <div className={classes.root}>
      <Grid container spacing={1} style={{ padding: '1px 10px' }}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Work Order User Status" variant="outlined" />
              <br />
              <br />
              {/* <TextField id="outlined-basic" label="Assign To" variant="outlined" /> */}
              <TextFieldAssignTo />
              <br />
              <br />
              <TextField id="outlined-basic" label="Parent Work Order" variant="outlined" />
              <br />
              <br />
              <TextField id="outlined-basic" label="Include Project Hierarchy" variant="outlined" />
              <br />
              <br />
              <TextField id="outlined-basic" label="Job Estimate" variant="outlined" />
              <br />
              <br />
              <Button variant="contained" color="primary">Save</Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </>
  )
}

export default CreateWorkOrder

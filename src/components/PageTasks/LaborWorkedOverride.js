import React from 'react';

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    }
  }
}));

export default function LaborWorkedOverride(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} style={{ padding: '1px 10px' }}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <b>Work Order</b>
            <br />
            {props.wo}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <b>Task</b>
            <br />
            {props.taskNumber}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>Override</h2>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Date" variant="outlined" />
              <br />
              <TextField id="outlined-basic" label="Hours Worked" variant="outlined" />
              <br />
              <TextField id="outlined-basic" label="Labor Class" variant="outlined" />
              <br />
              <TextField id="outlined-basic" label="Earn Class" variant="outlined" />
              <br />
              <Button variant="contained" color="primary">Apply</Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

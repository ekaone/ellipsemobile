import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formLogin: {
    '& > *': {
      margin: theme.spacing(1),
      width: 270,
      textAlign: 'center'
    },
  }
}));

export default function PageLogin() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid 
        container 
        spacing={1}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography style={{ textAlign: 'center', paddingTop: '30px' }} variant="h6" variant="h4" color="primary">
            EMS Center
          </Typography>
          <form style={{ textAlign: 'center', paddingTop: '80px' }} className={classes.formLogin} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button variant="contained" color="primary" component="div">
              Login
            </Button>
            <Typography variant="h6" component="div">
              Forgot password
            </Typography>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
import React, { useState } from 'react';

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

  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const handleChange = (prop) => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClick = () => {
    console.log(values)
  }

  console.log(values)

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
          <Typography style={{ textAlign: 'center', paddingTop: '30px' }} variant="h4" color="primary">
            EMS Center
          </Typography>
          <form style={{ textAlign: 'center', paddingTop: '80px' }} className={classes.formLogin} noValidate autoComplete="off">
            <TextField
             id="outlined-basic" 
             label="Username" 
             variant="outlined" 
             value={values.username}
             onChange={handleChange('username')}
            />
            <TextField 
              id="outlined-basic" 
              label="Password" 
              variant="outlined" 
              value={values.password}
              onChange={handleChange('password')}
            />
            <Button 
              variant="contained" 
              color="primary" 
              component="div"
              onClick={handleClick}
            >
              Login
            </Button>
          </form>
            <Typography align="center" variant="h6" component="div">
              Forgot password
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
import React, { useState } from 'react';
import { 
  Link,
  Redirect,
  useHistory  
} from 'react-router-dom'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// components unit
import Notification from './Notification'

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
  const history = useHistory();
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChange = (prop) => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClick = () => {
    if(values.username == '1' && values.password == '1') {
      // history.push("/page-forgotpassword/" + JSON.stringify(values))
      history.push("/page-landing")
    } else {
      setOpen(true)
      return
    }
  }

  console.log(values)

  return (
    <>
      <div className={classes.root}>
        <Grid 
          container 
          spacing={1}
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
              id="username" 
              label="Username" 
              variant="outlined" 
              value={values.username}
              onChange={handleChange('username')}
              />
              <TextField 
                id="password" 
                label="Password" 
                variant="outlined" 
                value={values.password}
                onChange={handleChange('password')}
                type="password"
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
              <Typography align="center" variant="subtitle1" component="div">
                <Link 
                  style={{ textDecoration: 'none'}} 
                  // to="/page-forgotpassword/12"
                  to={{
                    pathname: "/page-forgotpassword",
                    state: {
                        data: { id: 1, source: 'Page Login', component: 'PageLogin', time: new Date() }
                    }
                }}
                >
                  Forgot password
                </Link>
              </Typography>
          </Grid>
        </Grid>
      </div>
      {
        <Notification 
          handlerClose={handleClose}
          open={open}
        />
      }
    </>
  );
}
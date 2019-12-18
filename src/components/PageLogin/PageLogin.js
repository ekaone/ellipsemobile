import React, { useState } from 'react';
import { 
  useHistory  
} from 'react-router-dom'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    if(values.username == 'a' && values.password == 'a') {
      history.push("/page-landing")
    } else {
      setOpen(true)
      return
    }
  }

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
          <Grid item xs={12} lg={12}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: '#C00000', fontSize: '50px', fontWeight: 'bold' }}>EMS</span>            
              <span style={{ color: '#757170', fontSize: '30px' }}>mobile</span>
            </div>
            <div style={{ textAlign: 'center', color: '#757170', fontSize: '20px' }}>
              Enterprise Mobile Solution
            </div>
            <form style={{ textAlign: 'center', paddingTop: '80px' }} className={classes.formLogin} noValidate autoComplete="off">
              <TextField
                id="username" 
                label="Username" 
                variant="outlined" 
                value={values.username}
                onChange={handleChange('username')}
              />
              <br />
              <TextField 
                id="password" 
                label="Password" 
                variant="outlined" 
                value={values.password}
                onChange={handleChange('password')}
                type="password"
              />
              <br />
              <Button 
                style={{ boxShadow: '3px 3px 2px 2px #787672' }}
                variant="contained" 
                component="div"
                onClick={handleClick}
              >
                Login
              </Button>
            </form>
              <div style={{ textAlign: 'center', color: '#757170', fontSize: '25px', paddingTop: '120px' }}>
                Build solution for business
              </div>
              <div style={{ textAlign: 'center', color: '#757170', fontSize: '25px' }}>
                in the long-run
              </div>
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
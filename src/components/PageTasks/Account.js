import React from 'react'
import JohnDow from '../../assets/johnDow.jpg'

// components unit
import HeaderAppBarAccount from './HeaderAppBarAccount'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    display: 'flex',
    alignItems: 'center',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
}));

function Account() {
  const classes = useStyles();

  return (
    <>
      <HeaderAppBarAccount />
      <br />
      <div style={{ padding: '7px'}}>
        <Paper className={classes.root}>
          <Avatar className={classes.bigAvatar} alt="John Dow" src={JohnDow} />
          <Typography component="p" variant="h6" style={{ textAlign: 'center', paddingLeft: '10px' }}>
            Heru Priyanto
          </Typography>
        </Paper>
      </div>
    </>
  )
}

export default Account

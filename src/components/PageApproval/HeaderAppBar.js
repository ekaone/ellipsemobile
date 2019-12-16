import React from 'react';
import { 
  useHistory 
} from 'react-router-dom'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

// @material-ui/icons
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeaderAppBar() {
  const classes = useStyles();
  const history = useHistory()
  
  const goBack = () => {
    history.goBack()
  }

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static" color={'primary'}>
        <Toolbar>
        {/* <Grid container spacing={0}> */}
          {/* <Grid item xs={2}> */}
            <IconButton onClick={goBack} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <HomeIcon />
            </IconButton>
          {/* </Grid> */}
          {/* <Grid item xs={8}> */}
            <Typography variant="h6" align="center" className={classes.title}>
              Approvals
            </Typography>
            <IconButton />
          {/* </Grid> */}
          {/* <Grid item xs={2}> */}
          {/* </Grid> */}
          {/* </Grid> */}
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}

import React from 'react'

// @material-ui/core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// components unit
import View from './View'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

function PageLanding() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <View />
          </Grid>
          <Grid item xs={12}>
            <View />
          </Grid>
          <Grid item xs={12}>
            <View />
          </Grid>
        </Grid>
      </div>
    
    
    </>
  )
}

export default PageLanding

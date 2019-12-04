import React from 'react'

// @material-ui/core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// components unit
import View from './View'
import HeaderAppBar from './HeaderAppBar'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Tasks() {
  const classes = useStyles();

  return (
    <>
      <HeaderAppBar />
      <div className={classes.root}>
        <Grid container spacing={1}>
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

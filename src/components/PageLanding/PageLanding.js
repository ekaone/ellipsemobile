import React from 'react'

// @material-ui/core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


// components unit
import View from './View'
import { Items } from './Data'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const handleClick = (item) => {
  console.log(item)
}

function PageLanding() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography 
          style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }} 
          variant="h5" 
          color="primary"
        >
          EMS SaaS Apps
        </Typography>
        <Grid container spacing={1}>
          {
            Items.map(item => (
              <Grid key={item.id} item xs={12}>
                <View 
                  avatar={item.avatar}
                  title={item.title}
                  subheader={item.subheader}
                  handlerClick={() => handleClick(item.id)}
                />
              </Grid>
            ))
          }
        </Grid>
      </div>
    
    
    </>
  )
}

export default PageLanding

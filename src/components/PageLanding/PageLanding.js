import React from 'react'
import { 
  useHistory  
} from 'react-router-dom'

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

function PageLanding() {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (id) => {
    // const item = Items.find(itm => itm.id === id)
    // console.log(item)
    history.push(id)
  }

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
                  handlerClick={() => handleClick(item.path)}
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

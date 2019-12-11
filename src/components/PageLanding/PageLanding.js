import React from 'react'
import { 
  useHistory  
} from 'react-router-dom'

// @material-ui/core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

// @material-ui/icons
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';

// components unit
import View from './View'
import NotificationMenuList from './NotificationMenuList'
import { Items } from './Data'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2, 2)
  },
  margin: {
    margin: theme.spacing(1, 0),
  }
}));

function PageLanding() {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (path) => {
    setAnchorEl(null);
    history.push(path)
  };
  
  const handleClick = (path) => {
    history.push(path)
  }

  return (
    <>
      <div className={classes.root}>
        <Grid container className={classes.grid} >
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={10}>
            <Typography 
              style={{ textAlign: 'center' }} 
              variant="h4" 
              color="primary"
            >
              <b>EMS</b> PARAMITRA
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Badge onClick={handleClickMenu} className={classes.margin} badgeContent={4} color="secondary">
              <NotificationImportantIcon color="primary" style={{ fontSize: '30px' }} />
            </Badge>
            <NotificationMenuList 
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              handleClose={handleCloseMenu}
            />
          </Grid>
        </Grid>
        <br />
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

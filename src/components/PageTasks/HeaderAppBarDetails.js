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
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// @material-ui/icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ListIcon from '@material-ui/icons/List';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
}));


export default function HeaderAppBarDetails() {
  const classes = useStyles();
  const history = useHistory()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item) => {
    setAnchorEl(null);
    console.log(item)
  };
  
  const goPageTasks = () => {
    history.push("/page-tasks")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={goPageTasks} edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" align="center" className={classes.title}>
            Details
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMenu}
          >
            <ListIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleClose('inspect')}>Inspect</MenuItem>
            <MenuItem onClick={() => handleClose('labor')}>Labor</MenuItem>
            <MenuItem onClick={() => handleClose('complete')}>Complete</MenuItem>
            <MenuItem onClick={() => handleClose('apply')}>Apply</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

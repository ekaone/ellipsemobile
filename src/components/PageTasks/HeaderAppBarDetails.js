import React from 'react';
import {
  useHistory,
  useParams
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

// components
import { Color } from '../Colors/Colors'


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
  const { id } = useParams()
  const obj = JSON.parse(id)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpen = (item) => {
    if(item === 'inspect') {
      history.push("/page-tasks/inspect/" + obj)
    }
    if(item === 'labor') {
      history.push("/page-tasks/labor/" + obj)
    }
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  }

  const goPageTasks = () => {
    history.push("/page-tasks")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: Color.appBar }}>
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
            <MenuItem onClick={() => handleOpen('inspect')}>Inspect</MenuItem>
            <MenuItem onClick={() => handleOpen('labor')}>Labor</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

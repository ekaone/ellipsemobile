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
import Divider from '@material-ui/core/Divider';

// @material-ui/icons
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';

// components
import { Color } from '../Colors/Colors'

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
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = (go) => {
    setAnchorEl(null);
    if(go === 'account') {
      history.push('/page-tasks')
    }
    if(go === 'logout') {
      history.push('/')
    }
  };
  
  const goPageLanding = () => {
    history.push("/page-landing")
  }

  const goCreateWo = () => {
    history.push("/page-initiatework/createwo")
  }

  const open = Boolean(anchorEl);

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: Color.appBar }}>
        <Toolbar>
          <IconButton onClick={goPageLanding} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" align="center" className={classes.title}>
            Initiate Work
          </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
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
                <MenuItem onClick={goCreateWo}>Create WO</MenuItem>
                {/* <Divider style={{ margin: '7px' }} />
                <MenuItem>Setting</MenuItem>
                <MenuItem>Refresh</MenuItem> */}
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}

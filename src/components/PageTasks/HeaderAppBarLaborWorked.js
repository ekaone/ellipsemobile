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
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeaderAppBarLaborWorked(props) {
  const classes = useStyles();
  const history = useHistory()
  // const { id } = useParams()
  // const obj = JSON.parse(id)

  // const [anchorEl, setAnchorEl] = React.useState(null);
  
  const goPreviousPage = () => {
    history.goBack()
  }

  // const addWork = event => {
  //   setAnchorEl(event.currentTarget);
  // }

  // const handleClose = (item) => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={goPreviousPage} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" align="center" className={classes.title}>
            Labor Worked
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={props.addWork}
          >
            <AddAlarmIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={props.anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={props.open}
            // onClose={handleClose}
            onClose={props.handlerClose}
          >
            {/* <MenuItem onClick={() => handleClose('override')}>Override</MenuItem>
            <MenuItem onClick={() => handleClose('cost')}>Cost</MenuItem> */}
            <MenuItem onClick={props.handlerCloseOverride}>Override</MenuItem>
            <MenuItem onClick={props.handlerCloseCost}>Cost</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

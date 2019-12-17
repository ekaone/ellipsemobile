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

// @material-ui/icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// components
import { Color } from '../Colors/Colors'

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

export default function HeaderAppBarCreateWo() {
  const classes = useStyles();
  const history = useHistory()
  
  const goPreviousPage = () => {
    history.goBack()
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: Color.appBar }}>
        <Toolbar>
          <IconButton onClick={goPreviousPage} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" align="center" className={classes.title}>
            Create Work Order
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

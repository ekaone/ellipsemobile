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

// @material-ui/icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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

export default function HeaderAppBarLabor() {
  const classes = useStyles();
  const history = useHistory()
  const { id } = useParams()
  const obj = JSON.parse(id)
  
  const goPreviousPage = () => {
    history.goBack()
  }

  const addWork = () => {
    history.push("/page-tasks/labor/worked/" + obj)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: Color.appBar }}>
        <Toolbar>
          <IconButton onClick={goPreviousPage} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" align="center" className={classes.title}>
            Labor
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={addWork}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

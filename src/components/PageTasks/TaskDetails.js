import React, { useState } from 'react'
import { 
  useParams
} from 'react-router-dom'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

// @material-ui/icons
import WorkIcon from '@material-ui/icons/Work';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

// components unit
import HeaderAppBarDetails from './HeaderAppBarDetails'
import { 
  Items,
  FailureMode,
  FailureCondition 
} from './Data'
import { Color } from '../Colors/Colors'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  paper: {
    padding: theme.spacing(1, 1)
  },
  iconSave: {
    padding: theme.spacing(1, 2)
  },
  menu: {
    width: 200,
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: '100%',
  },
  input: {
    display: 'none',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    opacity: 0.7
  },
}));


function TaskDetails() {
  const classes = useStyles();
  const { id } = useParams()
  const obj = JSON.parse(id)
  // console.log(obj)

  const data = Items.find(itm => itm.id === obj)

  const [failMode, setFailMode] = useState('07 BROKEN');
  const [failCondition, setFailCondition] = useState('01 FACTORY DEFFECTIVE');

  const handleChangeFailMode = event => {
    setFailMode(event.target.value);
  };

  const handleChangeFailCondition = event => {
    setFailCondition(event.target.value)
  }

  return (
    <>
      <HeaderAppBarDetails />
      <p />
      <div style={{ padding: '7px' }}>
      <Paper className={classes.paper}>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <WorkIcon style={{ color: 'black', fontSize: '45px' }} />
            </ListItemAvatar>
            <ListItemText
              primary="Work Order"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {/* {props.workOrderNumber} */}
                    {data.workOrderNumber}
                  </Typography>
                  {" -- "} {data.workOrderAction }
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <AssignmentTurnedInIcon style={{ color: 'black', fontSize: '45px' }}/>
            </ListItemAvatar>
            <ListItemText
              primary="Task Number"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {data.taskNumber}
                  </Typography>
                  {" -- "} {data.taskAction}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <EmojiTransportationIcon style={{ color: 'black', fontSize: '45px' }} />
            </ListItemAvatar>
            <ListItemText
              primary="Equipment"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {data.equipmentNumber}
                  </Typography>
                  {' -- '} {data.equipmentAction}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        <Divider variant="fullWidth" />
        <Typography component="div" variant="h6" color="textPrimary">
          User Status
        </Typography>
        <br />
        <Typography component="span" variant="subtitle2" color="textPrimary">
          Start Date <b>01/15/2022</b>
        </Typography>
        <Divider orientation="vertical" variant="middle" component="span" />
        <Typography component="span" variant="subtitle2" color="textPrimary">
          Task Duration <b>0.00</b>
        </Typography>
        <br />
        <br />
        <Typography component="div" variant="subtitle2" color="textPrimary">
          Maintenance Type
        </Typography>
        <Typography component="div" variant="subtitle2" color="textPrimary">
          PM PREVENTIVE MAINTENANCE
        </Typography>
        <br />
        <Typography component="div" variant="subtitle2" color="textPrimary">
          Work Order Type
        </Typography>
        <Typography component="div" variant="subtitle2" color="textPrimary">
          SC SCHEDULE
        </Typography>
        <br />
        <Typography component="div" variant="subtitle2" color="textPrimary">
          Originator
        </Typography>
        <Typography component="div" variant="subtitle2" color="textPrimary">
          Administrator, System ADMIN
        </Typography>
        <Divider />
        {/* <center>
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera style={{ fontSize: '40px', color: 'red' }} />
            </IconButton>
          </label>
        </center> */}

        <br />
        <TextField 
          className={classes.textField} 
          // margin="dense" 
          id="outlined-basic" 
          label="Part Causing Failure" 
          variant="outlined" 
        />
        <br />
        <br />
        <TextField
            id="outlined-select-fail-mode"
            select
            label="Failure Mode"
            className={classes.textField}
            value={failMode}
            onChange={handleChangeFailMode}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            // margin="dense"
            variant="outlined"
          >
            {FailureMode.map(option => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <br />
          <TextField
            id="outlined-select-fail-mode"
            select
            label="Failure Condition"
            className={classes.textField}
            value={failCondition}
            onChange={handleChangeFailCondition}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            // margin="dense"
            variant="outlined"
          >
            {FailureCondition.map(option => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <br />
          <Button variant="contained" className={classes.textField} fullWidth>
            Save
          </Button>
      </Paper>
        <Fab className={classes.fab} style={{ backgroundColor: Color.icon }} aria-label="add">
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton style={{ color: "white" }} aria-label="upload picture" component="span">
              <CameraAltIcon />
            </IconButton>
          </label>
        </Fab>
      </div>
    </>
  )
}

export default TaskDetails

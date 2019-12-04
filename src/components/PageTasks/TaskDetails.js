import React from 'react'

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
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import WorkIcon from '@material-ui/icons/Work';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import SaveIcon from '@material-ui/icons/Save';

// components unit
import HeaderAppBarDetails from './HeaderAppBarDetails'

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
  }
}));

function TaskDetails(props) {
  const classes = useStyles();

  return (
    <>
      <HeaderAppBarDetails />
      <p />
      <Paper className={classes.paper}>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <WorkIcon color="primary" style={{ fontSize: '45px' }} />
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
                    {props.workOrderNumber}
                  </Typography>
                  {" -- "} {props.workOrderAction }
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <AssignmentTurnedInIcon color="primary" style={{ fontSize: '45px' }}/>
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
                    {props.taskNumber}
                  </Typography>
                  {" -- "} {props.taskAction}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <EmojiTransportationIcon color="primary" style={{ fontSize: '45px' }} />
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
                    {props.equipmentNumber}
                  </Typography>
                  {' -- '} {props.equipmentAction}
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
        <br />
        <TextField margin="dense" id="outlined-basic" label="Part Causing Failure" variant="outlined" />
        <IconButton color="primary" className={classes.iconSave} color="primary" aria-label="save">
          <SaveIcon style={{ fontSize: 40 }} />
        </IconButton>
      </Paper>
    </>
  )
}

export default TaskDetails

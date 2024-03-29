import React from 'react';

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// @material-ui/icons
import WorkIcon from '@material-ui/icons/Work';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

// components
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
  }
}));

export default function View(props) {
  const classes = useStyles();

  return (
    <>
      <p />
      <Paper className={classes.paper}>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <WorkIcon style={{ color: Color.icon, fontSize: '45px' }} />
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
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <AssignmentTurnedInIcon style={{ color: Color.icon, fontSize: '45px' }}/>
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
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <EmojiTransportationIcon style={{color: Color.icon, fontSize: '45px' }} />
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
      </Paper>
    </>
  );
}

import React from 'react';
import { useHistory } from 'react-router-dom'

// @material-ui/core
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';


// @material-ui/icons
import WorkIcon from '@material-ui/icons/Work';
import EventNoteIcon from '@material-ui/icons/EventNote';
import InboxIcon from '@material-ui/icons/Inbox';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1, 0),
  }
}));

export default function NotificationMenuList(props) {
  const classes = useStyles();
  const history = useHistory()

  const badgeIconWorkOrder = (
    <Badge className={classes.margin} badgeContent={3} color="secondary">
      <WorkIcon fontSize="small" />
    </Badge>
  )
  
  const badgeIconApproval = (
    <Badge className={classes.margin} badgeContent={2} color="secondary">
      <EventNoteIcon fontSize="small" />
    </Badge>
  )
  
  const badgeIconInbox = (
    <Badge className={classes.margin} badgeContent={12} color="secondary">
      <InboxIcon fontSize="small" />
    </Badge>
  )
  
  const badgeIconEquipment = (
    <Badge className={classes.margin} badgeContent={1} color="secondary">
      <EmojiTransportationIcon fontSize="small" />
    </Badge>
  )

  const notificationItems = [
    { id: 1, value: 'Work Order', icon: badgeIconWorkOrder, path: '/page-tasks' },
    { id: 2, value: 'Approval', icon: badgeIconApproval, path: '/page-approval' },
    { id: 3, value: 'Inbox', icon: badgeIconInbox, path: '/' },
    { id: 4, value: 'Equipment', icon: badgeIconEquipment, path: '/page-tasks' },
  ]
  

  const handleClick = (path) => {
    history.push(path)
  }

  return (
    <div>
      <Menu
        id="customized-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={props.open}
        onClose={props.handleClose}
      >
      {
        notificationItems.map(item => (
          <MenuItem key={item.id} onClick={() => handleClick(item.path)}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.value} />
          </MenuItem>
        ))
      }
      </Menu>
    </div>
  );
}
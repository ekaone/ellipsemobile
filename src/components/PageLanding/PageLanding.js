import React from 'react'
import { 
  useHistory  
} from 'react-router-dom'

// @material-ui/core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

// @material-ui/icons
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import WorkIcon from '@material-ui/icons/Work';
import EventNoteIcon from '@material-ui/icons/EventNote';
import InboxIcon from '@material-ui/icons/Inbox';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AcUnitIcon from '@material-ui/icons/AcUnit';

// components unit
import View from './View'
import NotificationMenuList from './NotificationMenuList'
import { Items } from './Data'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2, 2)
  },
  margin: {
    margin: theme.spacing(1, 0),
  }
}));

function PageLanding() {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClick = (id) => {
    // const item = Items.find(itm => itm.id === id)
    // console.log(item)
    history.push(id)
  }

  const badgeIconWorkOrder = (
    <Badge className={classes.margin} badgeContent={7} color="secondary">
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

  const notificationItem = [
    { id: 1, value: 'Work Order', icon: badgeIconWorkOrder },
    { id: 2, value: 'Approval', icon: badgeIconApproval },
    { id: 3, value: 'Inbox', icon: badgeIconInbox },
    { id: 4, value: 'Equipment', icon: badgeIconEquipment },
  ]
  

  return (
    <>
      <div className={classes.root}>
        <Grid container className={classes.grid} >
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={10}>
            <Typography 
              style={{ textAlign: 'center' }} 
              variant="h4" 
              color="primary"
            >
              <b>EMS</b> PARAMITRA
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Badge onClick={handleClickMenu} className={classes.margin} badgeContent={4} color="secondary">
              <NotificationImportantIcon color="primary" style={{ fontSize: '30px' }} />
            </Badge>
            <NotificationMenuList 
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              handleClose={handleCloseMenu}
              notificationItem={notificationItem}
            />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={1}>
          {
            Items.map(item => (
              <Grid key={item.id} item xs={12}>
                <View 
                  avatar={item.avatar}
                  title={item.title}
                  subheader={item.subheader}
                  handlerClick={() => handleClick(item.path)}
                />
              </Grid>
            ))
          }
        </Grid>
      </div>
    </>
  )
}

export default PageLanding

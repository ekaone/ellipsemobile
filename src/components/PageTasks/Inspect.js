import React from 'react'
import { 
  useParams
} from 'react-router-dom'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// @material-ui/icons
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

// @components unit
import HeaderAppBarInspect from './HeaderAppBarInspect'
import { Items } from './Data'

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


function Inspect() {

  const classes = useStyles();
  const { id } = useParams()
  const obj = JSON.parse(id)

  const data = Items.find(itm => itm.id === obj) 

  return (
    <>
      {/* {obj} */}
      <HeaderAppBarInspect />
      <Paper className={classes.paper}>
        <List className={classes.root}>
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
                    {data.equipmentNumber}
                  </Typography>
                  {' -- '} {data.equipmentAction}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Paper>
    </>
  )
}

export default Inspect

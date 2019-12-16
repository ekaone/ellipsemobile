import React from 'react'
import { 
  useParams,
  useHistory
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
import { ItemsInspectComponents } from './Data'

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
  const history = useHistory()
  const obj = JSON.parse(id)
  const ics = ItemsInspectComponents.filter(ic => ic.itemsId === obj)

  const handleClick = (item, id) => {
    history.push("/page-tasks/defect/" + id)
    console.log(item +"-"+ id)
  }

  const View = (props) => {
    return (
      <>
        <br />
        <Paper onClick={props.handlerClick}>
          <List className={classes.root}>
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
                      {props.equipmentNumber}
                    </Typography>
                    {' -- '} {props.equipmentAction}
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Component"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      <b>{props.component}</b>
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Paper>
      </>
    )
  }

  return (
    <>
      <HeaderAppBarInspect />
      <div style={{ padding: '7px' }}>
      {  
        ics.map(ic => (
          <View
            key={ic.id}
            defect={ic.component}
            txtLabelDefect={ic.component}
            equipmentNumber={ic.equipmentNumber}
            equipmentAction={ic.equipmentAction}
            component={ic.component}
            handlerClick={() => handleClick(ic.component, ic.id)}
          />
        ))
      }
      </div>
    </>
  )
}

export default Inspect

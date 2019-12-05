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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// @material-ui/icons
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  },
  txtFieldDefect: {
    width: '100%'
  }
}));


function Inspect() {

  const classes = useStyles();
  const { id } = useParams()
  const obj = JSON.parse(id)

  const ics = ItemsInspectComponents.filter(ic => ic.itemsId === obj)

  console.log("C: ", ics)

  const View = (props) => {
    return (
      <>
      <br />
      <Paper>
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
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>DEFECTS for <b>{props.defect}</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextField 
              className={classes.txtFieldDefect} 
              margin="dense" 
              id="outlined-basic" 
              label={props.txtLabelDefect} 
              variant="outlined" 
            />
            
          </ExpansionPanelDetails>
          <ExpansionPanelDetails style={{ paddingTop: 0 }} >
            <Button size="small" variant="contained" color="primary">
                Create Defect
              </Button>
          </ExpansionPanelDetails>
          </ExpansionPanel>
      </>
    )
  }

  return (
    <>
      <HeaderAppBarInspect />
      {  
        ics.map(ic => (
          <View
            key={ic.id}
            defect={ic.component}
            txtLabelDefect={ic.component}
            equipmentNumber={ic.equipmentNumber}
            equipmentAction={ic.equipmentAction}
            component={ic.component}
          />
        ))
      }
    </>
  )
}

export default Inspect

import React from 'react'
import { useHistory } from 'react-router-dom'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// @material-ui/icons
import Fab from '@material-ui/core/Fab';

// components
import HeaderAppBar from './HeaderAppBar'
import { ApprovalItems } from './Data'
import { Color } from '../Colors/Colors'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1, 2),
    textAlign: 'center',
    fontSize: '22px',
  }
}));



const AprrovalList = (props) => (
  <>
    <div style={{ padding: '7px' }}>
    <Paper className={props.paper} onClick={props.clickApprovalDetails}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Fab aria-label="edit">
            {props.numberApproval}
          </Fab>
        </Grid>
        <Grid item xs={12}>
          {props.ApprovalItems}
        </Grid>
      </Grid>
    </Paper>
    <br />
    </div>
  </>
)

function PageApproval() {
  const classes = useStyles();
  const history = useHistory()

  const clickApprovalDetails = (id, path) => {
    history.push(path)
  }

  return (
    <>
      <HeaderAppBar />
      <br />
      {
        ApprovalItems.map(itm => (
          <AprrovalList 
            key={itm.id}
            numberApproval={itm.numberApproval}
            ApprovalItems={itm.item}
            paper={classes.paper}
            clickApprovalDetails={() => clickApprovalDetails(itm.id, itm.path)}
          />
        ))
      }
    </>
  )
}

export default PageApproval

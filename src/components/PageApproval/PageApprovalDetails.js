import React from 'react'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

// @material-ui/icons
import DescriptionIcon from '@material-ui/icons/Description';
import Fab from '@material-ui/core/Fab';

// components
import HeaderAppBar from './HeaderAppBar'
import { PurchaseRequisition } from './Data'


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1, 2),
    textAlign: 'center',
    fontSize: '19px',
  }
}));


const AprrovalList = (props) => (
  <>
    <div style={{ padding: '7px' }}>
    <Paper className={props.paper}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <b>Authorizations Amount</b>
          <br />
          {props.currency} {props.currencyValue}
        </Grid>
        <Grid item xs={6}>
          <b>Requisition</b>
          {props.requisition}
        </Grid>
        <Grid item xs={6}>
          <b>Date Created</b>
          {props.dateCreated}
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
      </Grid>
    </Paper>
    <br />
    </div>
  </>
)

function PageApprovalDetails() {
  const classes = useStyles();

  return (
    <>
      <HeaderAppBar />
      <br />
      <br />
      {
        ApprovalItems.map(itm => (
          <AprrovalList 
            key={itm.id}
            numberApproval={itm.numberApproval}
            ApprovalItems={itm.item}
            paper={classes.paper}
            clickApprovalDetails={() => clickApprovalDetails(itm.id)}
          />
        ))
      }
    </>
  )
}

export default PageApprovalDetails

import React from 'react'
import { useHistory } from 'react-router-dom'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// components
import HeaderAppBarRequisition from './HeaderAppBarRequisition'
import { PurchaseRequisition } from './Data'


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1, 1),
    fontSize: '15px',
  }
}));


const AprrovalDetails = (props) => (
  <>
    <div style={{ padding: '7px' }}>
    <Paper className={props.paper} onClick={props.clickGoMoreDetails}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <b>Authorizations Amount</b>
          <br />
          {props.currency} {props.currencyValue}
        </Grid>
        <Grid item xs={6}>
          <b>Requisition</b>
          <br />
          {props.requisition}
        </Grid>
        <Grid item xs={6}>
          <b>Date Created</b>
          <br />
          {props.dateCreated}
        </Grid>
      </Grid>
    </Paper>
    <br />
    <center>  
      <ButtonGroup
        color="secondary"
        size="large"
        aria-label="large outlined secondary button group"
      >
        <Button onClick={props.clickButtonApprove}>APPROVE</Button>
        <Button onClick={props.clickButtonReject}>REJECT</Button>
        <Button onClick={props.clickButtonEndorse}>ENDORSE</Button>
      </ButtonGroup>
    </center>
    <br />
    </div>
  </>
)

const clickButtonApprove = (btnName, id, item) => {
  console.log(btnName+ " - " + id +" - "+ item)
}

const clickButtonReject = (btnName, id, item) => {
  console.log(btnName+ " - " + id +" - "+ item)
}

const clickButtonEndorse = (btnName, id, item) => {
  console.log(btnName+ " - " + id +" - "+ item)
}

function PageApprovalDetails() {
  const classes = useStyles();
  const history = useHistory()

  const clickGoMoreDetails = () => {
    history.push("/page-approval/moredetails")
  }

  return (
    <>
      <HeaderAppBarRequisition />
      <br />
      <br />
      {
        PurchaseRequisition.map(itm => (
          <AprrovalDetails 
            key={itm.id}
            paper={classes.paper}
            currency={itm.currency}
            currencyValue={itm.currencyValue}
            requisition={itm.requisition}
            dateCreated={itm.dateCreated}
            clickButtonApprove={() => clickButtonApprove('approve', itm.id, itm.requisition)}
            clickButtonReject={() => clickButtonReject('reject', itm.id, itm.requisition)}
            clickButtonEndorse={() => clickButtonEndorse('endorse', itm.id, itm.requisition)}
            clickGoMoreDetails={clickGoMoreDetails}
          />
        ))
      }
    </>
  )
}

export default PageApprovalDetails

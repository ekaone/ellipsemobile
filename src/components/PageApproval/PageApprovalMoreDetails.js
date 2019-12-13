import React from 'react'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';

// components
import HeaderAppBar from './HeaderAppBar'
import { PurchaseRequisitionDetails } from './Data'


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1, 1),
    fontSize: '15px',
  }
}));


const AprrovalMoreDetails = (props) => (
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
            <br />
            {props.requisition}
          </Grid>
          <Grid item xs={6}>
            <b>Date Required</b>
            <br />
            {props.dateRequired}
          </Grid>
          <Grid item xs={12}>
            <b>Requested By</b>
            <br />
            {props.requestedBy}
          </Grid>
          <Grid item xs={12}>
            <b>District</b>
            <br />
            {props.district}
          </Grid>
          <Divider />
          <Grid item xs={6}>
            <b>Item</b>
            <br />
            {props.item}
          </Grid>
          <Grid item xs={6}>
            <b>Part</b>
          </Grid>
          <Grid item xs={12}>
            <b>Description</b>
            <br />
            {props.description}
          </Grid>
          <Grid item xs={6}>
            <b>Quantity</b>
            <br />
            {props.quantity}
          </Grid>
          <Grid item xs={6}>
            <b>Units</b>
            <br />
            Each
          </Grid>
          <Grid item xs={12}>
            <b>Price</b>
            <br />
            {props.price}
          </Grid>
          <Grid item xs={12}>
            <b>Type</b>
            <br />
          </Grid>
          <Grid item xs={12}>
            <center>  
              <ButtonGroup
                color="secondary"
                size="large"
                aria-label="large outlined secondary button group"
              >
                <Button onClick={props.clickButtonApprove}>REJECT</Button>
                <Button onClick={props.clickButtonRedirect}>REDIRECT</Button>
                <Button onClick={props.clickButtonEndorse}>APPROVE</Button>
              </ButtonGroup>
            </center>
          </Grid>
        </Grid>
      </Paper>
      <br />
    </div>
  </>
)

const clickButtonReject = (btnName, id, item) => {
  console.log(btnName+ " - " + id +" - "+ item)
}

const clickButtonRedirect = (btnName, id, item) => {
  console.log(btnName+ " - " + id +" - "+ item)
}

const clickButtonApprove = (btnName, id, item) => {
  console.log(btnName+ " - " + id +" - "+ item)
}

function PageApprovalMoreDetails() {
  const classes = useStyles();

  return (
    <>
      <HeaderAppBar />
      {
        PurchaseRequisitionDetails.map(itm => (
          <AprrovalMoreDetails 
            key={itm.id}
            paper={classes.paper}
            currency={itm.currency}
            currencyValue={itm.currencyValue}
            requisition={itm.requisition}
            dateRequired={itm.dateRequired}
            requestedBy={itm.requestedBy}
            district={itm.district}
            item={itm.item}
            description={itm.description}
            quantity={itm.quantity}
            price={itm.price}
            clickButtonApprove={() => clickButtonReject('reject', itm.id, itm.requisition)}
            clickButtonReject={() => clickButtonRedirect('redirect', itm.id, itm.requisition)}
            clickButtonEndorse={() => clickButtonApprove('approve', itm.id, itm.requisition)}
          />
        ))
      }
    </>
  )
}

export default PageApprovalMoreDetails

import React from 'react'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


// components unit
import HeaderAppBarLabor from './HeaderAppBarLabor'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories};
}

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
];

function Labor() {
  const classes = useStyles();

  return (
    <>
      <HeaderAppBarLabor />
      <br />
      <div className={classes.root} style={{ padding: '7px' }}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ borderBottom: 'none' }} align="center" colSpan={2}><b>Employee</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">0000654</TableCell>
              <TableCell align="right">Slamet</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ borderBottom: 'none' }} component="th" scope="row"><b>Date</b></TableCell>
              <TableCell style={{ borderBottom: 'none' }} align="right"><b>Hours Worked</b></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">12/20/2020</TableCell>
              <TableCell align="right">5.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ borderBottom: 'none' }} component="th" scope="row"><b>Labor Class</b></TableCell>
              <TableCell style={{ borderBottom: 'none' }} align="right"><b>Earn Class</b></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">MK</TableCell>
              <TableCell align="right">003</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      </div>
    </>
  )
}

export default Labor

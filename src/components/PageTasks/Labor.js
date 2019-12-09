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
import { LaborEmployee } from './Data'

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

const LaborTable = (props) => (
  <>
  <Paper className={props.classesPaper} onClick={props.handlerEmployee}>
    <Table className={props.classesTable} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell style={{ borderBottom: 'none' }} align="center" colSpan={2}><b>Employee</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row">{props.laborId}</TableCell>
          <TableCell align="right">{props.laborName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ borderBottom: 'none' }} component="th" scope="row"><b>Date</b></TableCell>
          <TableCell style={{ borderBottom: 'none' }} align="right"><b>Hours Worked</b></TableCell>
        </TableRow>
        <TableRow>
          <TableCell component="th" scope="row">{props.date}</TableCell>
          <TableCell align="right">{props.hoursWorked}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ borderBottom: 'none' }} component="th" scope="row"><b>Labor Class</b></TableCell>
          <TableCell style={{ borderBottom: 'none' }} align="right"><b>Earn Class</b></TableCell>
        </TableRow>
        <TableRow>
          <TableCell component="th" scope="row">{props.laborClass}</TableCell>
          <TableCell align="right">{props.earnClass}</TableCell>
        </TableRow>
      </TableBody>
      </Table>
  </Paper>
  <br />
  </>
)

const handleEmployee = (id) => {
  console.log(id)
}

function Labor() {
  const classes = useStyles();

  return (
    <>
      <HeaderAppBarLabor />
      <br />
      <div className={classes.root} style={{ padding: '7px' }}>
        {
          LaborEmployee.map(item => (
            <LaborTable
              key={item.id}
              classesPaper={classes.paper} 
              classesTable={classes.table}
              laborId={item.laborId}
              laborName={item.laborName}
              date={item.date}
              hoursWorked={item.hoursWorked}
              laborClass={item.laborClass}
              earnClass={item.earnClass}
              handlerEmployee={() => handleEmployee(item.id)}
            />
          ))
        }  
      </div>
    </>
  )
}

export default Labor

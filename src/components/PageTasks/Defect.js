import React, { useState } from 'react'
import { 
  useParams
} from 'react-router-dom'

// @material-ui/core
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

// components unit
import HeaderAppBarDefect from './HeaderAppBarDefect'
import { 
  DefectAttribute,
  ItemsInspectComponents 
} from './Data'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  menu: {
    width: 150,
  },
}));

function Defect() {
  const classes = useStyles();
  const { id } = useParams()
  const obj = JSON.parse(id)

  const [defect, setDefect] = useState('Flash');

  const handleChange = event => {
    setDefect(event.target.value);
  };

  const defCp = ItemsInspectComponents.find(dt => dt.id === obj)

  console.log(defCp)

  return (
    <>
      <HeaderAppBarDefect 
        number={defCp.equipmentNumber}
        component={defCp.component}
      />
      <form style={{ justifyContent: 'center' }} className={classes.container} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Defect Attribute"
            className={classes.textField}
            value={defect}
            onChange={handleChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            variant="outlined"
          >
            {DefectAttribute.map(option => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
            id="outlined-select-currency"
            select
            label="Severity"
            className={classes.textField}
            value={defect}
            onChange={handleChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            variant="outlined"
          >
            {DefectAttribute.map(option => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
            id="outlined-select-currency"
            select
            label="Priority Code"
            className={classes.textField}
            value={defect}
            onChange={handleChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            variant="outlined"
          >
            {DefectAttribute.map(option => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
            id="outlined-select-currency"
            select
            label="User Status"
            className={classes.textField}
            value={defect}
            onChange={handleChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            variant="outlined"
          >
            {DefectAttribute.map(option => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
            id="outlined-select-currency"
            select
            label="Response"
            className={classes.textField}
            value={defect}
            onChange={handleChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            variant="outlined"
          >
            {DefectAttribute.map(option => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
            id="outlined-search"
            label="Response"
            type="search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </div>
      </form>
    </>
  )
}

export default Defect

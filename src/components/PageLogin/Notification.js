import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

export default function Notification(props) {
  const classes = useStyles();

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={props.open}
        autoHideDuration={2000}
        onClose={props.handlerClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Invalid Username or Password</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={props.handlerClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
}
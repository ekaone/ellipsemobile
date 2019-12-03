import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';

// import MoreVertIcon from '@material-ui/icons/MoreVert';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function View() {
  const classes = useStyles();

  return (
    <Card onClick={() => console.log('Card clicked..!')}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="work">
            <WorkIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    </Card>
  );
}

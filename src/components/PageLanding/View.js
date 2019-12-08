import React from 'react';
import {
  Link
} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';

import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function View(props) {
  const classes = useStyles();

  return (
    <Card onClick={props.handlerClick}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.avatar}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="work">
        //     <WorkIcon />
        //   </IconButton>
        // }
        title={props.title}
        subheader={props.subheader}
      />
    </Card>
  );
}

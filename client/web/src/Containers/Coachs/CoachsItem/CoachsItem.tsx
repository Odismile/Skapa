import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import PrimaryHeader from '../../../Components/Header/Header';



import useStyles from './styles';


const CoachsItem = () => {
  const classes = useStyles();

  return (
    <Card className={classes.coachBloc}>
      <CardContent className={classes.coachContent}>

      </CardContent>
    </Card>
  );
};

export default CoachsItem;

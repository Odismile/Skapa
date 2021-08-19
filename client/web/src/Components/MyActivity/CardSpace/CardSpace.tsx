import React, { FC } from 'react';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './style';
import imgActivity from '../../../Assets/images/activity.png';

interface CardSpaceProps{
  title: string,
  subltitle?: string,
}
const CardSpace:FC<CardSpaceProps> = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className='contentCard'>
        <img src={imgActivity} alt='photo'/>
        <Box className='details'>
          <Typography className='title'>{props.title}</Typography>
          <Typography className='subtitle'>{props.subltitle}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardSpace;

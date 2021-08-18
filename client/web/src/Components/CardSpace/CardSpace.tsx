import React from 'react';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './style';
import imgActivity from '../../Assets/images/activity.png';

const CardSpace = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className='contentCard'>
        <img src={imgActivity} alt='photo'/>
        <Box className='details'>
          <Typography className='title'>Contributor space</Typography>
          <Typography className='subtitle'>Lorem Ipsum</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardSpace;

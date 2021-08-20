import React, { FC } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import CardReview from '../../../../Components/CardReview/CardReview';

const TabOngoingCreator = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.card}>
        <CardReview name="Testtt" imgCardUrl="" />
        <Box className="foot">
          <Button className="bnt-contribute">Contribute</Button>
        </Box>
      </Box>
      <Box className={classes.card}>
        <CardReview name="Testtt" imgCardUrl="" />
        <Box className="foot">
          <Button className="bnt-contribute">Contribute</Button>
        </Box>
      </Box>
      <Box className={classes.card}>
        <CardReview name="Testtt" imgCardUrl="" />
        <Box className="foot">
          <Button className="bnt-contribute">Contribute</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TabOngoingCreator;

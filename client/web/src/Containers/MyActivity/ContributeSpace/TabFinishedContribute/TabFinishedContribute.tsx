import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';
import CardContributor from '../../../../Components/MyActivity/CardContributor/CardContributor';

const TabFinishedContribute = () => {
  const classes = useStyles();

  return (
    <Box>
      <CardContributor/>
      <CardContributor/>
    </Box>
  );
};

export default TabFinishedContribute;
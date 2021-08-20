import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';
import CardTalentOngoing from '../../../../Components/MyActivity/CardTalentOngoing/CardTalentOngoing';

const TabOngoingContribute = () => {
  const classes = useStyles();

  return (
    <Box>
      <CardTalentOngoing/>
      <CardTalentOngoing/>
    </Box>
  );
};

export default TabOngoingContribute;

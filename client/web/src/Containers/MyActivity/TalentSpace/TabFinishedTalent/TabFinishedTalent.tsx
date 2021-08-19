import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';
import CardTalentFinished from '../../../../Components/MyActivity/CardTalentFinished/CardTalentFinished';

const TabFinishedTalent = () => {
  const classes = useStyles();

  return (
    <Box>
      <CardTalentFinished/>
      <CardTalentFinished/>
    </Box>
  );
};

export default TabFinishedTalent;

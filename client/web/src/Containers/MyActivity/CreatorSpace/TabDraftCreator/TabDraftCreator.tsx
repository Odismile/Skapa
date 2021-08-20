import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';
import CardTalentOngoing from '../../../../Components/MyActivity/CardTalentOngoing/CardTalentOngoing';
import CardCreatorDraft from '../../../../Components/MyActivity/CardCreatorDraft/CardCreatorDraft';

const TabDraftCreator = () => {
  const classes = useStyles();

  return (
    <Box>
      <CardCreatorDraft/>
      <CardCreatorDraft/>
    </Box>
  );
};

export default TabDraftCreator;
import React from 'react';
import { Box } from '@material-ui/core';
//import useStyles from './styles';
import CardCreatorFinished from '../../../../Components/MyActivity/CardCreatorFinished/CardCreatorFinished';

const TabFinishedCreator = () => {
  //const classes = useStyles();

  return (
    <Box>
      <CardCreatorFinished/>
      <CardCreatorFinished/>
    </Box>
  );
};

export default TabFinishedCreator;

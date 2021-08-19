import React from 'react';
import { Box } from '@material-ui/core';
import PrimaryHeader from '../../../Components/Header';
import TabLink from '../../../Components/TabLink';
import useStyles from './styles'

// install Swiper modules

const CreateProject = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainPage}>
      <Box className="wrapPage">
        {/* header component */}
        <PrimaryHeader />

        <Box className={classes.mainContainer}>
          <TabLink />
        </Box>
      </Box>
    </Box>
  );
};

export default CreateProject;

import React, { useState } from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import LanguagesChoice from '../../Components/LanguagesChoice/LanguagesChoice';
import TextFieldComponent from '../../Components/TextField/TextField';

import useStyles from './styles';


const Profile = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainPageProfile}>
      <p>Profile here</p>
    </Box>
  );
};

export default Profile;

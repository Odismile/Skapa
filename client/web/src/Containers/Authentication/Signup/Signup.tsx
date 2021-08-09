import { Box, Button } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import React from 'react';
import useStyles from './styles';
import TextFieldComponent from '../../../Components/TextField/TextField';

const Signup = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box className="head">
          <img src="https://via.placeholder.com/100x54" alt="Logo" />
        </Box>
        <Box className="body">
          <TextFieldComponent label="Surname" id="surname" type="text" />
          <TextFieldComponent label="Lastname" id="lastname" type="text" />
          <TextFieldComponent label="Email" id="email" type="text" />
          <TextFieldComponent label="Password" id="password" type="password" />
          <Button variant="contained" className={classes.button}>
            Create account
          </Button>
          <a className='link' href='#'>Create account from Linkedin profile</a>
        </Box>
        <Box className="foot">
        </Box>
      </Box>
    </>
  );
};

export default Signup;

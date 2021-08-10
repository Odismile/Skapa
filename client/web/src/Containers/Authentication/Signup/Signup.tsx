import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import TextFieldComponent from '../../../Components/TextField/TextField';
import useStyles from './styles';
import { useRegister } from '../../../Providers/AuthProvider/hooks/useRegister';
import { ISignup } from '../../../types/signup';

const Signup = () => {
  const classes = useStyles();
  const { loading, doRegister } = useRegister();
  const [signup, setSignup] = useState<ISignup>({ email: '', lastName: '', surname: '', password: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignup((prev) => ({ ...prev, [name]: value }));
  };

  const onPressRegister = () => {
    // doRegister({ variables: { input: { email: signup.email, password: signup.password, username: signup.surname } } });
  };

  return (
    <>
      <Box className={classes.root}>
        <Box className="head">
          <img src="https://via.placeholder.com/100x54" alt="Logo" />
        </Box>
        <Box className="body">
          <TextFieldComponent label="Surname" id="surname" name={'surname'} type="text" onChange={onChange} />
          <TextFieldComponent label="Lastname" id="lastname" name={'lastName'} type="text" onChange={onChange} />
          <TextFieldComponent label="Email" id="email" type="text" name={'email'} onChange={onChange} />
          <TextFieldComponent label="Password" id="password" type="password" name={'password'} onChange={onChange} />
          <Button variant="contained" className={classes.button} onClick={onPressRegister}>
            Create account
          </Button>
          <a className="link" href="#">
            Create account from Linkedin profile
          </a>
        </Box>
        <Box className="foot"></Box>
      </Box>
    </>
  );
};

export default Signup;

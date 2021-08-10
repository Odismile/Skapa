import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import TextFieldComponent from '../../../Components/TextField/TextField';
import useStyles from './styles';
import { useRegister } from '../../../Providers/AuthProvider/hooks/useRegister';
import { ISignup } from '../../../types/signup';
import { isEmailValid, isPassValid } from '../../../Utils/validator';

const Signup = () => {
  const classes = useStyles();
  const { loading, doRegister } = useRegister();

  const [signup, setSignup] = useState<ISignup>({
    email: '',
    lastName: '',
    surname: '',
    password: '',
  });

  const [errorEmail, setErrorEmail] = useState(false);
  const [textErrorEmail, setTextErrorEmail] = useState('');

  const [errorLastName, setErrorLastName] = useState(false);
  const [textErrorLastName, setTextErrorLastName] = useState('');

  const [errorSurname, setErrorSurname] = useState(false);
  const [textErrorSurname, setTextErrorSurname] = useState('');

  const [errorPassword, setErrorPassword] = useState(false);
  const [textErrorPassword, setTextErrorPassword] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignup((prev) => ({ ...prev, [name]: value }));
    // if (!isPassValid(signup.password)) {
    //   setErrorPassword(true);
    //   setTextErrorPassword(
    //     'The password must be at least 8 characters long, one uppercase, one lowercase and one number.',
    //   );
    // }
  };

  const initError = () => {
    setErrorEmail(false);
    setTextErrorEmail('');
    setErrorLastName(false);
    setTextErrorLastName('');
    setErrorSurname(false);
    setTextErrorSurname('');
    setErrorPassword(false);
    setTextErrorPassword('');
  };

  const onPressRegister = () => {
    if (signup.surname.trim().length === 0) {
      setErrorSurname(true);
      setTextErrorSurname('Invalid surname');
    } else if (signup.lastName.trim().length === 0) {
      setErrorSurname(false);
      setTextErrorSurname('');
      setErrorLastName(true);
      setTextErrorLastName('Invalid lastname');
    } else if (signup.email.trim().length === 0 || !isEmailValid(signup.email)) {
      setErrorSurname(false);
      setTextErrorSurname('');
      setErrorLastName(false);
      setTextErrorLastName('');
      setErrorEmail(true);
      setTextErrorEmail('Invalid email');
    } else if (signup.password.trim().length === 0) {
      setErrorSurname(false);
      setTextErrorSurname('');
      setErrorLastName(false);
      setTextErrorLastName('');
      setErrorEmail(false);
      setTextErrorEmail('');
      setErrorPassword(true);
      setTextErrorPassword('Invalid password');
    } else if (!isPassValid(signup.password)) {
      setErrorSurname(false);
      setTextErrorSurname('');
      setErrorLastName(false);
      setTextErrorLastName('');
      setErrorEmail(false);
      setTextErrorEmail('');
      setErrorPassword(true);
      setTextErrorPassword(
        'The password must be at least 8 characters long, one uppercase, one lowercase and one number.',
      );
    } else {
      initError();
      doRegister({
        variables: { input: { email: signup.email, username: signup.surname, password: signup.password } },
      });
    }
  };

  return (
    <>
      <Box className={classes.root}>
        <Box className="head">
          <img src="https://via.placeholder.com/100x54" alt="Logo" />
        </Box>
        <Box className="body">
          <TextFieldComponent
            label="Surname"
            id="surname"
            name={'surname'}
            type="text"
            onChange={onChange}
            value={signup.surname}
            error={errorSurname}
            helperText={textErrorSurname}
          />
          <TextFieldComponent
            label="Lastname"
            id="lastname"
            name={'lastName'}
            type="text"
            onChange={onChange}
            value={signup.lastName}
            error={errorLastName}
            helperText={textErrorLastName}
          />
          <TextFieldComponent
            label="Email"
            id="email"
            type="text"
            name={'email'}
            onChange={onChange}
            value={signup.email}
            error={errorEmail}
            helperText={textErrorEmail}
          />
          <TextFieldComponent
            label="Password"
            id="password"
            type="password"
            name={'password'}
            onChange={onChange}
            value={signup.password}
            error={errorPassword}
            helperText={textErrorPassword}
          />

          <Button variant="contained" className={classes.button} onClick={onPressRegister} disabled={loading}>
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

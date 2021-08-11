import React, { FC, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import TextFieldComponent from '../../../Components/TextField/TextField';
import useStyles from './styles';
import { useRegister } from '../../../Providers/AuthProvider/hooks/useRegister';
import { ISignup } from '../../../types/signup';
import { isEmailValid, isPassValid } from '../../../Utils/validator';
import { useTranslation } from 'react-i18next';
import { ONBOARDING } from '../../../Routes';

const Signup: FC<RouteComponentProps> = (props) => {
  const { history } = props;
  const classes = useStyles();
  const { loading, doRegister } = useRegister();
  const { t } = useTranslation();

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
      setTextErrorSurname(t(`errorMessage.invalid_surname`));
    } else if (signup.lastName.trim().length === 0) {
      setErrorSurname(false);
      setTextErrorSurname('');
      setErrorLastName(true);
      setTextErrorLastName(t(`errorMessage.invalid_lastName`));
    } else if (signup.email.trim().length === 0 || !isEmailValid(signup.email)) {
      setErrorSurname(false);
      setTextErrorSurname('');
      setErrorLastName(false);
      setTextErrorLastName('');
      setErrorEmail(true);
      setTextErrorEmail(t(`errorMessage.invalid_email`));
    } else if (signup.password.trim().length === 0) {
      setErrorSurname(false);
      setTextErrorSurname('');
      setErrorLastName(false);
      setTextErrorLastName('');
      setErrorEmail(false);
      setTextErrorEmail('');
      setErrorPassword(true);
      setTextErrorPassword(t(`errorMessage.invalid_password`));
    } else if (!isPassValid(signup.password)) {
      setErrorSurname(false);
      setTextErrorSurname('');
      setErrorLastName(false);
      setTextErrorLastName('');
      setErrorEmail(false);
      setTextErrorEmail('');
      setErrorPassword(true);
      setTextErrorPassword(t(`errorMessage.invalid_password_text`));
    } else {
      initError();
      doRegister({
        variables: {
          input: {
            email: signup.email,
            username: '',
            password: signup.password,
            lastname: signup.surname,
            surname: signup.lastName,
          },
        },
      }).then((result) => {
        if (result.data?.registerCustom.jwt) {
          setSignup({
            email: '',
            lastName: '',
            surname: '',
            password: '',
          });
          history.push(ONBOARDING);
        }
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
            label={t(`labelText.labelSurname`)}
            id="surname"
            name={'surname'}
            type="text"
            onChange={onChange}
            value={signup.surname}
            error={errorSurname}
            helperText={textErrorSurname}
          />
          <TextFieldComponent
            label={t(`labelText.labelLastname`)}
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
            label={t(`labelText.labelPassword`)}
            id="password"
            type="password"
            name={'password'}
            onChange={onChange}
            value={signup.password}
            error={errorPassword}
            helperText={textErrorPassword}
          />
          <Button variant="contained" className={classes.button} onClick={onPressRegister} disabled={loading}>
            {t(`labelText.createAccount`)}
          </Button>
          <a className="link" href="#">
            {t(`labelText.createAccountFromLinkdln`)}
          </a>
        </Box>
        <Box className="foot"></Box>
      </Box>
    </>
  );
};

export default Signup;

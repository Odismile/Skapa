import React, { FC, useState } from 'react';
import { Box, Button, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import TextFieldComponent from '../../../Components/TextField/TextField';
import WrapOnBoarding from '../../../Components/WrapOnBoarding/WrapOnBoarding';
import { useRegister } from '../../../Providers/AuthProvider/hooks/useRegister';
//import { ONBOARDING } from '../../../Routes';
import { ISignup } from '../../../types/signup';
import { 
  isEmailValid, 
  isPassValid, 
  //isPassHasNumber, 
  isPassHasUpper, 
  isPassHasLower 
} from '../../../Utils/validator';
import useStyles from './styles';
import { clearLocalStorage, isAuthenticated } from '../../../Services';

const Signup: FC<RouteComponentProps> = (props) => {
  //const { history } = props;
  const classes = useStyles();
  const { loading, doRegister } = useRegister();
  const { t } = useTranslation();

  if (isAuthenticated()) {
    clearLocalStorage();
    window.location.reload();
  }

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
    clearLocalStorage();
    if (signup.surname.trim().length === 0) {
      setErrorSurname(true);
      setTextErrorSurname(t(`errorMessage.invalid_surname`));
    }else if ((!isPassHasUpper(signup.surname) && !isPassHasLower(signup.surname))){
      setErrorSurname(true);
      setTextErrorSurname(t(`errorMessage.as_number_value`));
      setErrorLastName(false)
      setTextErrorLastName('')
      setErrorEmail(false);
      setTextErrorEmail('');
      setErrorPassword(false);
      setTextErrorPassword('');
    }else if (signup.lastName.trim().length === 0) {
      setErrorSurname(false);
      setTextErrorSurname('');
      setErrorLastName(true);
      setTextErrorLastName(t(`errorMessage.invalid_lastName`));
    }else if ((!isPassHasUpper(signup.lastName) && !isPassHasLower(signup.lastName))){
      setErrorSurname(false);
      setTextErrorSurname('');
      setErrorLastName(true)
      setTextErrorLastName(t(`errorMessage.as_number_value`))
      setErrorEmail(false);
      setTextErrorEmail('');
      setErrorPassword(false);
      setTextErrorPassword('');
    }
     else if (signup.email.trim().length === 0 || !isEmailValid(signup.email)) {
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
    }else {
      initError();
      doRegister({
        variables: {
          input: {
            email: signup.email,
            username: signup.email,
            password: signup.password,
            lastname: signup.surname,
            surname: signup.lastName,
          },
        },
      }).then((result) => {
        if (result.data?.registerCustom?.user?.email) {
          setSignup({
            email: '',
            lastName: '',
            surname: '',
            password: '',
          });
        }
      });
    }
  };

  return (
    <>
      <WrapOnBoarding>
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
          label={t('signup.email')}
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
        <Box className={classes.btnFullWidth}>
          <Button variant="contained" className={classes.button} onClick={onPressRegister} disabled={loading}>
            {t(`labelText.createAccount`)}
          </Button>
        </Box>
        <Box className={classes.linkContainer}>
          <Link className={classes.link}>{t(`labelText.createAccountFromLinkdln`)}</Link>
        </Box>
        <Box className={classes.linkContainerLogin}>
          <Link className={classes.link} href="/login">
            {t(`labelText.backToLogin`)}
          </Link>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default Signup;

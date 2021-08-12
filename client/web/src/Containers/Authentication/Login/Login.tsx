import React, { useState, useEffect, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextFieldComponent from '../../../Components/TextField/TextField';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import { HOMEPAGE, SIGNUP } from '../../../Routes';
import TalentLogo from '../../../Assets/images/logo.svg';
import useLogin from '../../../Providers/AuthProvider/hooks/useLogin';
import { isAuthenticated } from '../../../Services';
import { isEmailValid, isPassHasMinMaxLength } from '../../../Utils/validator';
import { Snackbar } from '@material-ui/core';
import { displaySnackbar, InitSnackbarData } from '../../../Utils';
import { useApolloClient } from '@apollo/client';

interface LoginInterface {}

interface LoginState {
  username: string;
  password: string;
}

interface ErrorFieldsState {
  username: boolean;
  password: boolean;
}

export const InitErrorFields: ErrorFieldsState = {
  password: false,
  username: false,
};

const Login: FC<LoginInterface & RouteComponentProps> = (props) => {
  const { history } = props;
  const snackbar = InitSnackbarData;
  const client = useApolloClient();
  const { t } = useTranslation();
  const classes = useStyles();
  const [login, setLogin] = useState<LoginState>({ username: '', password: '' });
  const [errorfields, setErrorFields] = useState<ErrorFieldsState>(InitErrorFields);
  const { doLogin, loadingLogin, loginError, setLoginError } = useLogin();

  useEffect(() => {
    if (login.password.trim()) {
      setErrorFields((prev) => ({ ...prev, password: false }));
    }
    if (login.username.trim()) {
      setErrorFields((prev) => ({ ...prev, username: false }));
    }
  }, [login]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
    if (name === 'username' && !value) {
      setLoginError(t('errorMessage.empty_field_email'));
      setErrorFields((prev) => ({ ...prev, username: true }));
    } else if (name === 'username' && !isEmailValid(value)) {
      setErrorFields((prev) => ({ ...prev, username: true }));
      setLoginError(t('errorMessage.invalid_email'));
    } else setLoginError('');
  };

  const handleSubmit = async () => {
    let test = false;
    if (!login.username) {
      setLoginError(t('errorMessage.empty_field_email'));
      setErrorFields((prev) => ({ ...prev, email: true }));
    }
    if (!login.password) {
      setLoginError(t('errorMessage.empty_field_password'));
      setErrorFields((prev) => ({ ...prev, password: true }));
    }
    if (!login.username && !login.password) {
      setErrorFields((prev) => ({ ...prev, username: true, password: true }));
      setLoginError(t('errorMessage.empty_fields'));
    }
    if (login.username && login.password) {
      if (isPassHasMinMaxLength(login.password)) {
        doLogin({ variables: { input: { identifier: login.username, password: login.password, provider: 'local' } } })
          .then((res) => {
            if (res.data) test = true;
          })
          .catch((err) => {})
          .finally(() => {
            if (test && isAuthenticated()) {
              snackbar.type = 'SUCCESS';
              snackbar.message = t('login.login_message');
              displaySnackbar(client, snackbar);
            } else {
              setErrorFields((prev) => ({ ...prev, username: true, password: true }));
              setLoginError(t('errorMessage.invalid_fields'));
            }
          });
      } else {
        setErrorFields((prev) => ({ ...prev, password: true }));
        setLoginError(t('errorMessage.invalid_password_text'));
      }
    }
  };

  if (isAuthenticated()) {
    // return <Redirect {...{ to: '/' }} />;
  }

  const handleGoToCreateAccount = () => {
    history.push(SIGNUP);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.loginContainer}>
        <Box className={classes.imgContainer}>
          <img src={TalentLogo} className={classes.img} />
        </Box>
        <form className={classes.loginForm}>
          <TextFieldComponent
            name="username"
            id="username"
            label="Login"
            type="text"
            value={login.username}
            // className={classes.textField}
            onChange={onChange}
            error={errorfields.username}
          />
          <TextFieldComponent
            name="password"
            id="passowrd"
            label="Password"
            // variant="outlined"
            // fullWidth
            type="password"
            // className={classes.textField}
            value={login.password}
            onChange={onChange}
            error={errorfields.password}
          />
          {loginError && (
            <Box textAlign="center" marginBottom="24px" className={classes.messageBox}>
              <Typography>{loginError}</Typography>
            </Box>
          )}
          <Box className={classes.btnFullWidth}>
            <Button variant="contained" className={classes.button} onClick={handleSubmit} disabled={loadingLogin}>
              {t('login.login')}
            </Button>
          </Box>

          <Box className={classes.linkContainer}>
            <Link className={classes.link} onClick={handleGoToCreateAccount}>
              Create an account
            </Link>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default withRouter(Login);

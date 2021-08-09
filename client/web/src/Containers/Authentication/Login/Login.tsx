import React, { useState, useEffect, FC } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import useStyles from './styles';
import useLogin from '../../../Providers/AuthProvider/hooks/useLogin';

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

const Login: FC<LoginInterface> = (props) => {
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
  };

  const handleSubmit = async () => {
    if (!login.username) {
      setErrorFields((prev) => ({ ...prev, email: true }));
    }
    if (!login.password) {
      setErrorFields((prev) => ({ ...prev, password: true }));
    }
    if (login.username && login.password) {
      // doLogin
    }
  };

  return (
    <Box className={classes.loginContainer}>
      <form className={classes.loginForm}>
        <TextField
          name="username"
          variant="outlined"
          fullWidth
          value={login.username}
          className={classes.textField}
          onChange={onChange}
          error={errorfields.username}
          margin="normal"
        />
        <TextField
          name="password"
          variant="outlined"
          fullWidth
          type="password"
          className={classes.textField}
          value={login.password}
          onChange={onChange}
          error={errorfields.password}
          margin="normal"
        />
        {loginError && (
          <Box textAlign="center" marginBottom="24px" className={classes.messageBox}>
            <Typography>{loginError}</Typography>
          </Box>
        )}
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          className={classes.btn}
          onClick={handleSubmit}
          disabled={loadingLogin}
        >
          {t('login.login')}
        </Button>
        <Box className={classes.linkContainer}>
          <Link className={classes.link}>Create an account</Link>
        </Box>
      </form>
    </Box>
  );
};

export default Login;

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import TalentLogo from '../../../Assets/images/logo.svg';
import TextFieldComponent from '../../../Components/TextField/TextField';
import useLogin from '../../../Providers/AuthProvider/hooks/useLogin';
import { SIGNUP } from '../../../Routes';
import { clearLocalStorage, removeAccessToken } from '../../../Services';
import { isEmailValid, isPassHasMinMaxLength } from '../../../Utils/validator';
import Google from '../../../Components/Icons/Google';
import useStyles from './styles';
import { useGoogleLogin } from 'react-google-login';
import useCheckEmail from '../../../Providers/AuthProvider/hooks/useCheckEmail';
import { useRegister } from '../../../Providers/AuthProvider/hooks/useRegister';
import { useCreateProfile } from '../../../Providers/ProfilProvider/useCreateProfile';
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
  const clientId = process.env.REACT_APP_CLIENT_ID as string;
  const { history } = props;
  const { t } = useTranslation();
  const client = useApolloClient();
  const snackbar = InitSnackbarData;
  const classes = useStyles();
  const [login, setLogin] = useState<LoginState>({ username: '', password: '' });
  const [errorfields, setErrorFields] = useState<ErrorFieldsState>(InitErrorFields);
  const { doLogin, loadingLogin, loginError, setLoginError } = useLogin();
  const { doCreateProfile } = useCreateProfile();

  const { doRegister } = useRegister();
  const { doCheckEmail } = useCheckEmail();
  
  const onSuccess = (res: any)=>{
    doCheckEmail({ variables: { email: res.profileObj.email} }).then(({data})=>{
      if(!data?.checkEmailProfile){
        doRegister({
          variables: {
            input: {
              email: res.profileObj.email,
              username: res.profileObj.email,
              password: 'vide',
              lastname: res.profileObj.familyName,
              surname: res.profileObj.name

            },
          },
        }).then((register)=>{
          if(window.confirm(t('createProfile.isCreate'))) {
            doCreateProfile({
              variables: {
                input: {
                  user_id: register.data?.registerCustom.user.id,
                },
              },
            });
          }
          //AUthentification with token google
          
        })
      }else{
        snackbar.type = 'ERROR';
        snackbar.message = t('errorMessage.Email is already taken.');
        displaySnackbar(client, snackbar);
      }
    });

  }
  const onFailure = (res: any)=>{
    // console.log('[Login Failed] res', res);
    snackbar.type = 'ERROR';
    snackbar.message = t('errorMessage.undefined');
  }
  const {signIn} = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    
  });

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
        removeAccessToken();
        clearLocalStorage();
        doLogin({ variables: { input: { identifier: login.username, password: login.password, provider: 'local' } } })
          .then((res) => {
            if (res.data) test = true;
          })
          .catch((err) => {})
          .finally(() => {
            if (!test) {
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

  const handleGoToCreateAccount = () => {
    history.push(SIGNUP);
  };

  return (
    <Box className={classes.mainPage}>
      <Box className="wrapPage">
        <Box className={classes.imgContainer}>
          <img src={TalentLogo} className={classes.img} alt='Talent Team'/>
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
          <Box className={classes.btnFullWidth}>
            <Button variant="contained" style={{backgroundColor: "red", color: "white"}} onClick={signIn} >
            <Google />{ t('login.login_auth')}
            </Button>
          </Box>
        </form>
        <Box className={classes.linkContainer}>
          <Link className={classes.link} onClick={handleGoToCreateAccount}>
            Create an account
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default withRouter(Login);

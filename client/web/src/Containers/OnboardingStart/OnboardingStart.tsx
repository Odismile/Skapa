import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import mainLogo from '../../Assets/images/logo.svg';
import { useUpdateUser } from '../../Providers/AuthProvider/hooks/useUpdateUser';
import useStyles from './styles';

const OnboardingStart = () => {
  const classes = useStyles();

  const { doUpdateUSer, loading } = useUpdateUser();

  const onPressOnBoardingStart = () => {
    doUpdateUSer({
      variables: { input: { where: { id: localStorage.getItem('idMe') ?? '' } } },
    });
  };

  return (
    <Box className={classes.mainPage}>
      <Box className="wrapPage">
        <Box component="header" className={classNames(classes.main_header)}>
          <figure className="logo">
            <img src={mainLogo} alt="logo" />
          </figure>
        </Box>
        <Box className={classNames(classes.mainContainer)}>
          <Box className="createProfile_start">
            <Typography variant="h1">
              Now, let’s create <br />
              your profile !
            </Typography>
            <Button
              onClick={onPressOnBoardingStart}
              variant="contained"
              href="/onboarding-profile"
              className={classes.btn_createProfile}
              color="primary"
              disabled={loading}
            >
              Create profile
            </Button>
          </Box>
        </Box>
        <Box component="footer" className={classes.footerPage} onClick={onPressOnBoardingStart}>
          <Typography className="link-footer">
            <Link to="/">Skip profile creation</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardingStart;

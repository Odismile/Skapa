import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { Link, useHistory } from 'react-router-dom';
import mainLogo from '../../Assets/images/logo.svg';
import { useUpdateUser } from '../../Providers/AuthProvider/hooks/useUpdateUser';
import useStyles from './styles';
import { HOMEPAGE, ONBOARDING_PROFILE } from '../../Routes';

const OnboardingStart = () => {
  const classes = useStyles();
  const history = useHistory();

  const { doUpdateUSer, loading } = useUpdateUser();

  const onPressOnBoardingStart = () => {
    doUpdateUSer({
      variables: { input: { where: { id: localStorage.getItem('idMe') ?? '' }, data: { isFirstConnection: false } } },
    });
    history.push(ONBOARDING_PROFILE);
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
              className={classes.btn_createProfile}
              color="primary"
              disabled={loading}
            >
              Create profile
            </Button>
          </Box>
        </Box>
        <Box component="footer" className={classes.footerPage}>
          <Typography className="link-footer">
            <Link to={HOMEPAGE}>Skip profile creation</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardingStart;

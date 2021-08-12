import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography, LinearProgress, withStyles } from '@material-ui/core';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import useStyles from './style';

import image_profile from '../../Assets/images/image_profile.png';
import image_organisation from '../../Assets/images/organisation.png';
import { useHistory } from 'react-router-dom';
import { HOMEPAGE, LOGIN } from '../../Routes';

// progressbar style
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 11,
    borderRadius: 10.5,
    width: 210,
    margin: '0 auto',
  },
  colorPrimary: {
    backgroundColor: '#DFFFF2',
  },
  bar: {
    borderRadius: 10.5,
    backgroundColor: '#5BD3A0',
  },
}))(LinearProgress);

const OnboardingProfileSeven = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const history = useHistory();
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          history.replace(HOMEPAGE);
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <WrapOnBoarding width={210} marginTop={40}>
        <Box className={classes.onBoard}>
          <h1 className="welcome">Welcome !</h1>
          <Box className="user">
            <figure className="user-organisation-image">
              <img src={image_organisation} alt="user-organisation" />
            </figure>
            <figure className="user-profile">
              <img src={image_profile} alt="profile" />
            </figure>
            <Box className="user-name">Nathan Dupont</Box>
            <Box className="user-organisation">UX Designer</Box>
          </Box>
          <Box className="welcome-loader">
            <p>Customizing your homepage</p>
            <Box className="progress-bar">
              <BorderLinearProgress variant="determinate" value={progress} />
            </Box>
          </Box>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfileSeven;

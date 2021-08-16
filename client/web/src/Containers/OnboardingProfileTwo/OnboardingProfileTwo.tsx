import React from 'react';
import { Box, Button, FormControl, FormLabel, Link, TextField, Typography } from '@material-ui/core';
import useStyles from './style';
import iconDownload from '../../Assets/images/IconDownload.svg';
import { useHistory } from 'react-router';
import classNames from 'classnames';
import mainLogo from '../../Assets/images/logo.svg';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';

const OnboardingProfileTwo = () => {
  const classes = useStyles();

  const history = useHistory();
  function handleClick() {
    history.push('/onboarding-profile3');
  }

  return (
    <>
      <WrapOnBoarding>
        <Box className={classes.root}>
          <FormControl component="fieldset" className={classes.form}>
            <FormLabel component="legend" className="title">
              Upload a picture of you
            </FormLabel>
            <input accept="image/*" className={classes.input} id="contained-button-file" multiple type="file" />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span">
                +
              </Button>
            </label>
          </FormControl>
          <FormControl component="fieldset" className={classes.inputVideo}>
            <FormLabel component="legend" className="title">
              Upload a video pitch
            </FormLabel>
            <input accept="video/*" className={classes.input} id="contained-button-file" multiple type="file" />
            <label htmlFor="contained-button-file">
              <Box className="video">
                <Box component="span">Import a video from your computer (mp4)</Box>
                <img src={iconDownload} alt="iconDownload" />
              </Box>
            </label>
          </FormControl>
          <FormControl component="fieldset" className={classes.bio}>
            <FormLabel component="legend" className="title">
              Bio
            </FormLabel>
            <textarea placeholder="tell us more about you !"></textarea>
          </FormControl>
          <Box className={classes.btnNext}>
            <Button variant="contained" onClick={handleClick}>
              Next
            </Button>
          </Box>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfileTwo;

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Link,
  TextField,
} from '@material-ui/core';
import React from 'react';
import useStyles from './style';
import logoTalent from '../../Assets/images/logo-talent.svg';
import iconDownload from '../../Assets/images/IconDownload.svg';
import { useHistory } from 'react-router';

const OnboardingProfileTwo = () => {
  const classes = useStyles();

  const history = useHistory();
  function handleClick(){
    history.push("/onboarding-profile2")
  }

  return (
    <>
      <Box className={classes.root}>
        <Box className="head">
          <img src={logoTalent} alt="Logo" />
        </Box>
        <Box className="body">
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
                <Box className='video'>
                    <Box component='span'>Import a video from your computer (mp4)</Box>
                    <img src={iconDownload} alt="iconDownload" />
                </Box>
            </label>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend" className="title">
            Bio
            </FormLabel>
            <textarea placeholder="tell us more about you !"></textarea>
          </FormControl>
          <Box className={classes.btnNext}>
            <Button variant="contained" onClick={handleClick}>Next</Button>
          </Box>
        </Box>
        <Box className="foot">
          <Link href="#">Skip this step</Link>
        </Box>
      </Box>
    </>
  );
};

export default OnboardingProfileTwo;

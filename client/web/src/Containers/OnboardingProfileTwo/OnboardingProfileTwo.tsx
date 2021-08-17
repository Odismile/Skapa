import { Box, Button, FormControl, FormLabel, Link, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './style';
import iconDownload from '../../Assets/images/IconDownload.svg';
import { useHistory } from 'react-router';
import classNames from 'classnames';
import mainLogo from '../../Assets/images/logo.svg';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import IconPhoto from '../../Components/Icons/Photo/Photo';

import { useUploadFile } from '../../Utils/uploadFile';

// icons
import Plus from '../../Components/Icons/Plus/Plus';
import Info from '../../Components/Icons/Info/Info';
import Download from '../../Components/Icons/Download/Download';

const OnboardingProfileTwo = () => {
  const [fileUpload, setFileUpload] = useState('');
  const [videoUpload, setVideoUpload] = useState('');
  const [filesPicture, setFilesPicture] = useState<File[] | null>(null);
  const [filesVideo, setFilesVideo] = useState<File[] | null>(null);
  const [disabledButton, setDisabledButton] = useState(true);

  const { uploadFile } = useUploadFile();

  const classes = useStyles();

  const history = useHistory();
  const handleClick = async () => {
    await uploadFile(filesPicture);
    await uploadFile(filesVideo);
    history.push('/onboarding-profile3');
  };
  return (
    <WrapOnBoarding>
      <Box className={classes.root}>
        <FormControl component="fieldset" className={classes.form}>
          <FormLabel component="legend" className="title">
            Upload a picture of you
          </FormLabel>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const url = event?.target?.files?.[0] ? URL.createObjectURL(event?.target?.files?.[0]) : '';
              const filesConcat = Array.from(event.target.files || []);
              setFilesPicture(filesConcat);
              setFileUpload(url);
            }}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span">
              <Plus />
            </Button>
          </label>
        </FormControl>
        <FormControl component="fieldset" className={classes.inputVideo}>
          <FormLabel component="legend" className="title">
            Upload a video pitch <Info />
          </FormLabel>
          <input
            accept="video/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file" /* onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const url = event?.target?.files?.[0] ? URL.createObjectURL(event?.target?.files?.[0]) : '';
                const filesConcat = Array.from(event.target.files || []);
                setFilesVideo(filesConcat);
                setVideoUpload(url);
              }} */
          />
          <label htmlFor="contained-button-file">
            <Box className="video">
              <Box component="span">Import a video from your computer (mp4)</Box>
              <Download />
              {/* <img src={iconDownload} alt="iconDownload" /> */}
            </Box>
          </label>
        </FormControl>
        <FormControl component="fieldset" className={classes.bio}>
          <FormLabel component="legend" className="title">
            Bio
          </FormLabel>
          <textarea placeholder="tell us more about you !"></textarea>
          <Typography className="textLeft">0/240 symbols</Typography>
        </FormControl>
        <Box className={classes.btnNext}>
          <Button variant="contained" onClick={handleClick}>
            Next
          </Button>
        </Box>
      </Box>
    </WrapOnBoarding>
  );
};

export default OnboardingProfileTwo;

import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Tooltip,
  Typography,
  TextareaAutosize,
} from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './style';
import ReactPlayer from 'react-player';
import iconDownload from '../../Assets/images/IconDownload.svg';
import { useHistory, Link } from 'react-router-dom';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';

import { useUploadFile } from '../../Utils/uploadFile';
import { pictureFile, videoFile, bio } from '../../ReactiveVariable/Profil/profil';
import Info from '../../Components/Icons/Info';
import { ONBOARDING_PROFILE3 } from '../../Routes';
//import { createBrotliCompress } from 'zlib';

const OnboardingProfileTwo = () => {
  const [imageUpload, setImageUpload] = useState('');
  const [videoUpload, setVideoUpload] = useState('');
  const { uploadFile } = useUploadFile();
  const [disabledButton, setDisabledButton] = useState(false);
  const [bios, setBios] = useState('');

  const testButtonToEnabled = () => {
    if (!!pictureFile() && !!videoFile() && !!bio()) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(ONBOARDING_PROFILE3);
  };
  return (
    <>
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
              type="file"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const url = event?.target?.files?.[0] ? URL.createObjectURL(event?.target?.files?.[0]) : '';
                const filesConcat = Array.from(event.target.files || []);
                pictureFile(filesConcat);
                setImageUpload(url);
                testButtonToEnabled();
              }}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span">
                {imageUpload.length !== 0 ? (
                  <Avatar alt="Profile" src={imageUpload} className={classes.large} />
                ) : (
                  <>
                    <span className="addIcon">+</span>
                  </>
                )}
              </Button>
            </label>
          </FormControl>
          <FormControl component="fieldset" className={classes.inputVideo}>
            <FormLabel component="legend" className="title">
              Upload a video pitch
              <Tooltip title="Lorem ipsum" arrow>
                <IconButton aria-label="info" className="tooltip">
                  <Info />
                </IconButton>
              </Tooltip>
            </FormLabel>
            <input
              type="file"
              accept="video/*"
              id="contained-button-video"
              className={classes.input}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const url = event?.target?.files?.[0] ? URL.createObjectURL(event?.target?.files?.[0]) : '';
                const filesConcat = Array.from(event.target.files || []);
                videoFile(filesConcat);
                setVideoUpload(url);
                testButtonToEnabled();
              }}
            />

            <label htmlFor="contained-button-video">
              <Box className="video">
                <Box component="span">Import a video from your computer (mp4)</Box>
                <img src={iconDownload} alt="iconDownload" />
              </Box>
            </label>
            {videoUpload.length !== 0 ? (
              <ReactPlayer url={videoUpload} className={classes.videoUpload} playing={true} controls={true} />
            ) : (
              <></>
            )}
          </FormControl>
          <FormControl component="fieldset" className={classes.bio}>
            <FormLabel component="legend" className="title">
              Bio
            </FormLabel>
            <TextareaAutosize
              minRows="8"
              placeholder="Tell us more about you !"
              defaultValue=""
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setBios(e.target.value);
                bio(e.target.value);
                testButtonToEnabled();
              }}
              value={bios}
              maxLength={240}
            />
            <Typography className="textLeft">{bios.length}/240 symbols</Typography>
          </FormControl>
          <Box className={classes.btnNext}>
            <Button variant="contained" onClick={handleClick} disabled={disabledButton}>
              Next
            </Button>
          </Box>
        </Box>
        <Box component="footer" className={classes.footerPage}>
          <Typography className="link-footer">
            <Link to={ONBOARDING_PROFILE3}>Skip this step</Link>
          </Typography>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfileTwo;

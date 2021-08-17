import { Avatar, Box, Button, FormControl, FormLabel, Link, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './style';
import ReactPlayer from 'react-player';
import iconDownload from '../../Assets/images/IconDownload.svg';
import { useHistory } from 'react-router';
import classNames from 'classnames';
import mainLogo from '../../Assets/images/logo.svg';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import IconPhoto from '../../Components/Icons/Photo/Photo';

import { useUploadFile } from '../../Utils/uploadFile';
import { pictureFile, videoFile, bio } from '../../ReactiveVariable/Profil/profil';
import { testButtonEnable } from '../../ReactiveVariable/ButtonTest/ButtonTestEnable';

const OnboardingProfileTwo = () => {
  const [imageUpload, setImageUpload] = useState('');
  const [videoUpload, setVideoUpload] = useState('');
  const [filesPicture, setFilesPicture] = useState<File[] | null>(null);
  const [disabledButton, setDisabledButton] = useState(false);
  const [filesVideo, setFilesVideo] = useState<File[] | null>(null);
  const { uploadFile } = useUploadFile();
  const testButtonToEnabled = () => {
    if (!!pictureFile() && !!videoFile() && !!bio()) {
      testButtonEnable(false);
    } else {
      testButtonEnable(true);
    }
    setDisabledButton(disabledButton);
  };

  const classes = useStyles();

  const history = useHistory();
  const handleClick = async () => {
    await uploadFile(filesPicture);
    await uploadFile(filesVideo);
    history.push('/onboarding-profile3');
  };
  let video;
  return (
    <>
      <WrapOnBoarding>
        <Box className={classes.root}>
          <FormControl component="fieldset" className={classes.form}>
            <FormLabel component="legend" className="title">
              Upload a picture of you
            </FormLabel>
            Send picture
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              type="file"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const url = event?.target?.files?.[0] ? URL.createObjectURL(event?.target?.files?.[0]) : '';
                const filesConcat = Array.from(event.target.files || []);
                setFilesPicture(filesConcat);
                setImageUpload(url);
                testButtonToEnabled();
              }}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span">
                {imageUpload.length !== 0 ? (
                  <Avatar alt="Profil" src={imageUpload} className={classes.large} />
                ) : (
                  <>
                    <span>+</span>
                  </>
                )}
              </Button>
            </label>
          </FormControl>
          <FormControl component="fieldset" className={classes.inputVideo}>
            <FormLabel component="legend" className="title">
              Upload a video pitch
            </FormLabel>
            <input
              type="file"
              accept="video/*"
              id="contained-button-video"
              className={classes.input}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const url = event?.target?.files?.[0] ? URL.createObjectURL(event?.target?.files?.[0]) : '';
                const filesConcat = Array.from(event.target.files || []);
                setFilesVideo(filesConcat);
                setVideoUpload(url);
                testButtonToEnabled();
              }}
            />

            <label htmlFor="contained-button-video">
              <Box className="video">
                <Box component="span">Import a video from your computer (mp4)</Box>
                {videoUpload.length !== 0 ? (
                  <ReactPlayer
                    url={videoUpload}
                    // className={classes.videoUpload}
                    width={'150px'}
                    height={'100px'}
                    playing={true}
                    controls={true}
                  />
                ) : (
                  <></>
                )}
                <img src={iconDownload} alt="iconDownload" />
              </Box>
            </label>
          </FormControl>
          <FormControl component="fieldset" className={classes.bio}>
            <FormLabel component="legend" className="title">
              Bio
            </FormLabel>
            <textarea
              placeholder="tell us more about you !"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                testButtonToEnabled();
              }}
            ></textarea>
          </FormControl>
          <Box className={classes.btnNext}>
            <Button variant="contained" onClick={handleClick} disabled={disabledButton}>
              Next
            </Button>
          </Box>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfileTwo;

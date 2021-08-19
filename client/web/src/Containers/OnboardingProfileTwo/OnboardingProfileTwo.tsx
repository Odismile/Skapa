import { Avatar, Box, Button, FormControl, FormLabel } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './style';
import ReactPlayer from 'react-player';
import iconDownload from '../../Assets/images/IconDownload.svg';
import { useHistory } from 'react-router';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';

import { useUploadFile } from '../../Utils/uploadFile';
import { bio } from '../../ReactiveVariable/Profil/profil';
import { pictureFile, videoFile, bio, filesPicture, filesVideo } from '../../ReactiveVariable/Profil/profil';
import { testButtonEnable } from '../../ReactiveVariable/ButtonTest/ButtonTestEnable';

const OnboardingProfileTwo = () => {
  const [imageUpload, setImageUpload] = useState('');
  const [videoUpload, setVideoUpload] = useState('');
  const [filesPicture, setFilesPicture] = useState<File[] | null>(null);
  const [disabledButton, setDisabledButton] = useState(true);
  const [filesVideo, setFilesVideo] = useState<File[] | null>(null);
  const { uploadFile } = useUploadFile();
  //const [filesPicture, setFilesPicture] = useState<File[] | null>(null);
  const [disabledButton, setDisabledButton] = useState(false);
  //const [filesVideo, setFilesVideo] = useState<File[] | null>(null);
  const testButtonToEnabled = () => {
    if (!!filesPicture && !!filesVideo && !!bio()) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const classes = useStyles();
  const history = useHistory();

  const handleClick = async () => {
    await uploadFile(filesPicture);
    await uploadFile(filesVideo);
  const handleClick = () => {
   /*  await uploadFile(filesPicture);
    await uploadFile(filesVideo); */
    history.push('/onboarding-profile3');
  };
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
                filesPicture(filesConcat);
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
                filesVideo(filesConcat);
                setVideoUpload(url);
                testButtonToEnabled();
              }}
            />

            <label htmlFor="contained-button-video">
              <Box className="video">
                <Box component="span">Import a video from your computer (mp4)</Box>
                {videoUpload.length !== 0 ? (
                  <ReactPlayer url={videoUpload} width={'150px'} height={'100px'} playing={true} controls={true} />
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
                bio(e.target.value);
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
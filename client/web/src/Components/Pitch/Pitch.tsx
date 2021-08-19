import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './style';
import ReactPlayer from 'react-player';

interface pitchProps {
  url: string;
}

const Pitch: FC<pitchProps> = ({ url }) => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <Typography variant="h6" className="title">
        Pitch
      </Typography>
      <Box className="video">
        <ReactPlayer className="video" url={url} playing={true} controls={true} width="100%" height="168px"/>
      </Box>
    </Box>
  );
};

export default Pitch;

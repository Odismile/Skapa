import React from 'react';
import { CardMedia, Box, Typography } from '@material-ui/core';
import useStyles from './style';

import requestPhoto from '../../../Assets/images/photo_request.png';

const ImgAppExterne = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.cardMedia_content} >
      <CardMedia
        className="media"
        image={requestPhoto}
        title="ongoing show"
      />
      <Typography component="span" className="labeled">Innovation</Typography>
    </Box>
  );
};

export default ImgAppExterne;

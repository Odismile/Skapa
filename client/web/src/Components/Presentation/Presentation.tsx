import { Box, Link, TextareaAutosize } from '@material-ui/core';
import React, { FC } from 'react';
import useStyles from './style';

interface PresentationProps {
  description: string;
}

const Presentation: FC<PresentationProps> = ({ description }) => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <TextareaAutosize minRows={4} maxRows={4} defaultValue={description} disabled={true} />
      <Box className="link">
        <Link href="#">Show more</Link>
      </Box>
    </Box>
  );
};

export default Presentation;

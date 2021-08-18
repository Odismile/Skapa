import { Box, Link, TextareaAutosize } from '@material-ui/core';
import React, { FC } from 'react';
import { projects } from '../../GraphQL/project/types/projects';
import useStyles from './style';

interface PresentationProps {
  data?: projects | undefined;
}

const Presentation: FC<PresentationProps> = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <TextareaAutosize minRows={4} maxRows={4} defaultValue={data?.projects?.[0]?.description} disabled={true} />
      <Box className="link">
        <Link href="#">Show more</Link>
      </Box>
    </Box>
  );
};

export default Presentation;

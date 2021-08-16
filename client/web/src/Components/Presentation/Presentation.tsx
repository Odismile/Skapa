import React, { FC } from 'react';
import { Box, Link, TextareaAutosize } from '@material-ui/core';
import useStyles from './style';
import { project } from '../../GraphQL/project/types/project';

interface PresentationProps {
  data?: project | undefined;
}

const Presentation: FC<PresentationProps> = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <TextareaAutosize minRows={4} maxRows={4} defaultValue={data?.project?.description} disabled={true} />
      <Box className="link">
        <Link href="#">Show more</Link>
      </Box>
    </Box>
  );
};

export default Presentation;

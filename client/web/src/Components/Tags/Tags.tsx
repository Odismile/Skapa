import React, { FC } from 'react';
import { Box, Chip } from '@material-ui/core';
import useStyles from './style';
import { project } from '../../GraphQL/project/types/project';

interface TagsProps {
  data?: project | undefined;
}

const Tags: FC<TagsProps> = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <Box className={classes.tags}>
        {data?.project?.project_skills?.map((tag, index) => {
          return <Chip key={index} label={tag?.item?.label ?? ''} />;
        })}
      </Box>
    </Box>
  );
};

export default Tags;

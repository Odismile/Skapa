import { Box, Chip } from '@material-ui/core';
import React, { FC } from 'react';
import { projects } from '../../GraphQL/project/types/projects';
import useStyles from './style';

interface TagsProps {
  data?: projects | undefined;
}

const Tags: FC<TagsProps> = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <Box className={classes.tags}>
        {data?.projects?.[0]?.project_skills?.map((tag, index) => {
          return <Chip key={index} label={tag?.item?.label ?? ''} />;
        })}
      </Box>
    </Box>
  );
};

export default Tags;

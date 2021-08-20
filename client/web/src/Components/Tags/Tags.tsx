import { Box, Chip } from '@material-ui/core';
import React, { FC } from 'react';
import { projects_projects_project_skills } from '../../GraphQL/project/types/projects';
import useStyles from './style';

interface TagsProps {
  project_skills?: (projects_projects_project_skills | null)[] | null | undefined;
}

const Tags: FC<TagsProps> = ({ project_skills }) => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <Box className={classes.tags}>
        {project_skills?.map((tag, index) => {
          return <Chip key={index} label={tag?.item?.label ?? ''} />;
        })}
      </Box>
    </Box>
  );
};

export default Tags;

import { useReactiveVar } from '@apollo/client';
import { Box, Checkbox, FormControl, FormControlLabel } from '@material-ui/core';
import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useItemsProjectTypes } from '../../Providers/ItemsProvider/hooks/useItemsProjectTypes';
import { projectSkills } from '../../ReactiveVariable/Project/projectSkills';
import useStyles from './style';

const SearchProject = () => {
  const classes = useStyles();
  const { data, loading } = useItemsProjectTypes();
  const projectCategory = useReactiveVar(projectSkills);

  useEffect(() => {
    projectSkills([]);
  }, []);

  const onClickProject = (label: string) => {
    const newProjectCategory = projectCategory.find((category) => category === label);
    if (newProjectCategory) {
      const newCategories = projectCategory.filter((category) => category !== label);
      projectSkills(newCategories);
    } else {
      projectSkills([...projectCategory, label]);
    }
  };

  return (
    <Box className={classes.searchProject}>
      <FormControl component="fieldset" className="form-control">
        <Box className="form-control-item">
          <h2>Sort by</h2>
          <Box className="form-control-content">
            <FormControlLabel
              className="form-control-label"
              value="Latest"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox" />}
              label="Latest"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="Oldest"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox" />}
              label="Oldest"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="Latest"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox" />}
              label="Latest"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="Latest"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox" />}
              label="Latest"
              labelPlacement="start"
            />
          </Box>
        </Box>
        <Box className="form-control-item">
          <h2>Project category</h2>
          <Box className="form-control-content">
            {loading && <Skeleton count={1} height={25} />}
            {data?.items?.map((item, index) => {
              return (
                <FormControlLabel
                  key={index}
                  className="form-control-label"
                  value={item?.label}
                  onClick={() => onClickProject(item?.label ?? '')}
                  control={
                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox" />
                  }
                  label={item?.label}
                  labelPlacement="start"
                />
              );
            })}
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
};

export default SearchProject;

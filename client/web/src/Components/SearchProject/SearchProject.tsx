import { useReactiveVar } from '@apollo/client';
import { Box, Checkbox, FormControl, FormControlLabel } from '@material-ui/core';
import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useItemsProjectTypes } from '../../Providers/ItemsProvider/hooks/useItemsProjectTypes';
import { projectFilterBy, projectSkills } from '../../ReactiveVariable/Project/projectSkills';
import { filters } from '../../Utils/filterProject';
import useStyles from './style';

const SearchProject = () => {
  const classes = useStyles();
  const { data, loading } = useItemsProjectTypes();
  const projectCategory = useReactiveVar(projectSkills);
  const projectFilterByLocal = useReactiveVar(projectFilterBy);

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

  const onClickFilterBy = (label: string) => {
    const newProjectCategory = projectFilterByLocal.find((category) => category === label);
    if (newProjectCategory) {
      const newCategories = projectFilterByLocal.filter((category) => category !== label);
      projectFilterBy(newCategories);
    } else {
      projectFilterBy([...projectFilterByLocal, label]);
    }
  };

  return (
    <Box className={classes.searchProject}>
      <FormControl component="fieldset" className="form-control">
        <Box className="form-control-item">
          <h2>Sort by</h2>
          <Box className="form-control-content">
            {filters.map((filter, index) => {
              return (
                <FormControlLabel
                  onClick={() => onClickFilterBy(filter.label)}
                  key={index}
                  className="form-control-label"
                  value={filter.label}
                  control={
                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox" />
                  }
                  label={filter.label}
                  labelPlacement="start"
                />
              );
            })}
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

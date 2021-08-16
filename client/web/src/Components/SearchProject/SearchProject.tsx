import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from "@material-ui/core";
import useStyles from './style';

const SearchProject = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  return (
    <Box className={classes.searchProject}>
      <FormControl component="fieldset" className="form-control">
        <Box className="form-control-item">
          <h2>Sort by</h2>
          <Box className="form-control-content">
            <FormControlLabel
              className="form-control-label"
              value="Latest"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}className="form-checkbox"/>}
              label="Latest"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="Oldest"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox"/>}
              label="Oldest"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="Latest"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox"/>}
              label="Latest"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="Latest"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox"/>}
              label="Latest"
              labelPlacement="start"
            />

          </Box>
        </Box>
        <Box className="form-control-item">
          <h2>Project category</h2>
          <Box className="form-control-content">
            <FormControlLabel
              className="form-control-label"
              value="Change"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox"/>}
              label="Change"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="Innovation"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox"/>}
              label="Innovation"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="LAB"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox"/>}
              label="LAB"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="Creative"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox"/>}
              label="Creative"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="Prospective"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox"/>}
              label="Prospective"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="R&D"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox"/>}
              label="R&D"
              labelPlacement="start"
            />
          </Box>
        </Box> 
      </FormControl>
    </Box>
  );
};

export default SearchProject;


import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from "@material-ui/core";
import useStyles from './style';

const SearchProject = () => {
  const classes = useStyles();

  return (
    <Box className="search-project">
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="Latest"
            control={<Checkbox />}
            label="Latest"
            labelPlacement="start"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default SearchProject;


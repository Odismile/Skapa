import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Typography } from '@material-ui/core';
import useStyles from './style';
import DailyRate from '../DailyRate/DailyRate';
import LanguagesChoice from '../LanguagesChoice/LanguagesChoice';

const SearchTalents = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  return (
    <Box className={classes.searchProject}>
      <FormControl component="fieldset" className="form-control">
        <Box className="form-control-item">
          <Typography component="h2">Profils vérifiés</Typography>
          <Box className="form-control-content">
            <FormControlLabel
              className="form-control-label"
              value="Top Rated"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox" />}
              label="Top Rated"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="Recommanded"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox" />}
              label="Recommanded"
              labelPlacement="start"
            />
          </Box>
        </Box>
        <Box className="form-control-item">
          <Typography component="h2">Level</Typography>
          <Box className="form-control-content">
            <FormControlLabel
              className="form-control-label"
              value="Junior"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox" />}
              label="Junior"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="Senior"
              control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox" />}
              label="Senior"
              labelPlacement="start"
            />
          </Box>
        </Box>
        <Box className="form-control-item">
          <Typography component="h2">Daily Rate</Typography>
          <DailyRate />
        </Box>
        <Box className="form-control-item">
          <Typography component="h2">Skills</Typography>
          <Box className={classes.content}>
            <Box className={classes.skills}>
              <Box className="inputGroup">
                <input id="option1" name="option1" type="checkbox" />
                <label htmlFor="option1">Product Design</label>
              </Box>
              <Box className="inputGroup">
                <input id="option2" name="option2" type="checkbox" />
                <label htmlFor="option2">UX Design</label>
              </Box>
              <Box className="inputGroup">
                <input id="option3" name="option3" type="checkbox" />
                <label htmlFor="option3">Scribing</label>
              </Box>
              <Box className="inputGroup">
                <input id="option4" name="option4" type="checkbox" />
                <label htmlFor="option4">UI Design</label>
              </Box>
              <Box className="inputGroup">
                <input id="option5" name="option5" type="checkbox" />
                <label htmlFor="option5">IT Challenge</label>
              </Box>
              <Box className="inputGroup">
                <input id="option6" name="option6" type="checkbox" />
                <label htmlFor="option6">Sujet RH</label>
              </Box>
              <Box className="inputGroup">
                <input id="option7" name="option7" type="checkbox" />
                <label htmlFor="option7">Supply chain knowledge</label>
              </Box>
              <Box className="inputGroup">
                <input id="option8" name="option8" type="checkbox" />
                <label htmlFor="option8">Juridiction</label>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="form-control-item">
          <Typography component="h2">Languages</Typography>
          <LanguagesChoice name="English" id="english" title="English" test={() => {}} />
          <LanguagesChoice name="French" id="french" title="French" test={() => {}} />
          <LanguagesChoice name="Spanish" id="spanish" title="Spanish" test={() => {}} />
        </Box>
      </FormControl>
    </Box>
  );
};

export default SearchTalents;

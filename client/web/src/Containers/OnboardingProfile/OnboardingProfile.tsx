import { Box, Button, FormControl, FormControlLabel, FormLabel, Link, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react';
import TextFieldComponent from '../../Components/TextField/TextField';
import useStyles from './styles';
import logoTalent from '../../Assets/images/logo-talent.svg';
import LanguagesChoice from '../../Components/LanguagesChoice/LanguagesChoice';
import { useHistory } from 'react-router-dom';

const OnboardingProfile = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const history = useHistory();
  function handleClick(){
    history.push("/onboarding-profile2")
  }
  
  return (
    <>
      <Box className={classes.root}>
        <Box className="head">
          <img src={logoTalent} alt="Logo" />
        </Box>
        <Box className="body">
          <TextFieldComponent label="Your position" id="position" placeholder="UX Designer" type="text" />
          <FormControl component="fieldset" className={classes.radio}>
            <FormLabel component="legend">Job Seniority (years)</FormLabel>
            <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel value="female" control={<Radio />} label="0-3 yrs" />
              <FormControlLabel value="male" control={<Radio />} label="3-8 yrs" />
              <FormControlLabel value="other" control={<Radio />} label="> 8 yrs" />
            </RadioGroup>
          </FormControl>
          <TextFieldComponent label="Name of your organisation" id="organisation" placeholder="GRT Gaz" type="text" />
          <FormControl component="fieldset" className={classes.languages}>
            <FormLabel  component="legend">Languages level</FormLabel>
            <LanguagesChoice title="French"/>
            <LanguagesChoice title="English"/>
            <LanguagesChoice title="Spanish"/>
          </FormControl>
          <Box className={classes.btnNext}>
            <Button variant="contained" onClick={handleClick}>Next</Button>
          </Box>
        </Box>
        <Box className="foot">
          <Link href="#">Skip this step</Link>
        </Box>
      </Box>
    </>
  );
};

export default OnboardingProfile;

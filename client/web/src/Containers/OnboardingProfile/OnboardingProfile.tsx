import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import React from 'react';
import TextFieldComponent from '../../Components/TextField/TextField';
import useStyles from './styles';
import logoTalent from '../../Assets/images/logo-talent.svg';
import LanguagesChoice from '../../Components/LanguagesChoice/LanguagesChoice';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import mainLogo from '../../Assets/images/logo.svg';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';

const OnboardingProfile = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('0-3');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const history = useHistory();
  function handleClick() {
    history.push('/onboarding-profile2');
  }

  return (
    <>
      <WrapOnBoarding>
        <TextFieldComponent label="Your position" id="position" placeholder="UX Designer" type="text" />
        <FormControl component="fieldset" className={classes.radio}>
          <FormLabel component="legend">Job Seniority (years)</FormLabel>
          <RadioGroup
            row
            aria-label="years"
            name="years"
            value={value}
            onChange={handleChange}
            className="custom_radio"
          >
            <FormControlLabel value="0-3" control={<Radio />} label="0-3 yrs" />
            <FormControlLabel value="3-8" control={<Radio />} label="3-8 yrs" />
            <FormControlLabel value=">8" control={<Radio />} label="> 8 yrs" />
          </RadioGroup>
        </FormControl>
        <TextFieldComponent label="Name of your organisation" id="organisation" placeholder="GRT Gaz" type="text" />
        <FormControl component="fieldset" className={classes.languages}>
          <FormLabel component="legend">Languages level</FormLabel>
          <LanguagesChoice title="French" />
          <LanguagesChoice title="English" />
          <LanguagesChoice title="Spanish" />
        </FormControl>
        <Box className={classes.btnNext}>
          <Button variant="contained" onClick={handleClick}>
            Next
          </Button>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfile;

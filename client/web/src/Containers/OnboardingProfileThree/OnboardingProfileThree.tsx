import React from 'react';
import { Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import TextFieldComponent from '../../Components/TextField/TextField';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import useStyles from './style';

// icons
import Search from '../../Components/Icons/Search/Search';

const OnboardingProfileThree = () => {
  const classes = useStyles();

  const history = useHistory();
  function handleClick() {
    history.push('/onboarding-profile4');
  }

  return (
    <>
      <WrapOnBoarding>
        <Box className={classes.search}>
          <TextFieldComponent
            label="What are your skills ?"
            name="skills"
            type="text"
            id="skills"
            placeholder="Look for skills"
          />
          <Search className="iconSearch" />
        </Box>
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
        <Box className={classes.btnNext}>
          <Button variant="contained" onClick={handleClick}>
            Next
          </Button>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfileThree;

import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import bgChange from '../../Assets/images/change.svg';
import bgCreative from '../../Assets/images/creative.svg';
import bgDelivery from '../../Assets/images/delivery.svg';
import bgInnovation from '../../Assets/images/innovation.svg';
import bgProspective from '../../Assets/images/prospective.svg';
import bgTechnical from '../../Assets/images/technical.svg';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import useStyles from './style';

const OnboardingProfileFour = () => {
  const classes = useStyles();

  const history = useHistory();
  function handleClick() {
    history.push('/onboarding-profile4');
  }

  return (
      <WrapOnBoarding>
        <Box className={classes.bloc}>
          <Typography className='title'>What kind of project would you like to see ?</Typography>
          <Box className={classes.content}>
            <Box className="choice">
              <Box className="inputGroup">
                <input id="option1" name="option1" type="checkbox" />
                <label htmlFor="option1">
                  Change
                  <img src={bgChange} alt="bg" />
                </label>
              </Box>
              <Box className="inputGroup">
                <input id="option2" name="option2" type="checkbox" />
                <label htmlFor="option2">
                  Creative
                  <img src={bgCreative} alt="bg" />
                </label>
              </Box>
              <Box className="inputGroup">
                <input id="option3" name="option3" type="checkbox" />
                <label htmlFor="option3">
                  Innovation
                  <img src={bgInnovation} alt="bg" />
                </label>
              </Box>
              <Box className="inputGroup">
                <input id="option4" name="option4" type="checkbox" />
                <label htmlFor="option4">
                  Prospective
                  <img src={bgProspective} alt="bg" />
                </label>
              </Box>
              <Box className="inputGroup">
                <input id="option5" name="option5" type="checkbox" />
                <label htmlFor="option5">
                  Delivery
                  <img src={bgDelivery} alt="bg" />
                </label>
              </Box>
              <Box className="inputGroup">
                <input id="option6" name="option6" type="checkbox" />
                <label htmlFor="option6">
                  Technical
                  <img src={bgTechnical} alt="bg" />
                </label>
              </Box>
            </Box>
          </Box>
          <Box className={classes.btnNext}>
            <Button variant="contained" onClick={handleClick}>
              Next
            </Button>
          </Box>
        </Box>
      </WrapOnBoarding>
  );
};

export default OnboardingProfileFour;

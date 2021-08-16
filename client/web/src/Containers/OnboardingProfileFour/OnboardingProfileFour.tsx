import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import useStyles from './style';

// icons
import IconChange from '../../Components/Icons/Change/Change';
import IconCreative from '../../Components/Icons/Creative/Creative';
import IconInnovation from '../../Components/Icons/Innovation/Innovation';
import IconProspective from '../../Components/Icons/Prospective/Prospective';
import IconDelivery from '../../Components/Icons/Delivery/Delivery';
import IconTechnical from '../../Components/Icons/Technical/Technical';

import bgDelivery from '../../Assets/images/delivery.svg';
import bgProspective from '../../Assets/images/prospective.svg';
import bgTechnical from '../../Assets/images/technical.svg';
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
                  <IconChange className="bgIcon" />
                </label>
              </Box>
              <Box className="inputGroup">
                <input id="option2" name="option2" type="checkbox" />
                <label htmlFor="option2">
                  Creative
                  <IconCreative className="bgIcon" />
                </label>
              </Box>
              <Box className="inputGroup">
                <input id="option3" name="option3" type="checkbox" />
                <label htmlFor="option3">
                  Innovation
                  <IconInnovation className="bgIcon" />
                </label>
              </Box>
              <Box className="inputGroup">
                <input id="option4" name="option4" type="checkbox" />
                <label htmlFor="option4">
                  Prospective
                  <IconProspective className="bgIcon" />
                </label>
              </Box>
              <Box className="inputGroup">
                <input id="option5" name="option5" type="checkbox" />
                <label htmlFor="option5">
                  Delivery
                  <IconDelivery className="bgIcon" />
                </label>
              </Box>
              <Box className="inputGroup">
                <input id="option6" name="option6" type="checkbox" />
                <label htmlFor="option6">
                  Technical
                  <IconTechnical className="bgIcon" />
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

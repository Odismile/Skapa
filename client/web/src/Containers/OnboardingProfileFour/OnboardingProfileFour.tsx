import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import useStyles from './style';
import IconChange from '../../Components/Icons/Change/Change';
import IconCreative from '../../Components/Icons/Creative/Creative';
import IconInnovation from '../../Components/Icons/Innovation/Innovation';
import IconProspective from '../../Components/Icons/Prospective/Prospective';
import IconDelivery from '../../Components/Icons/Delivery/Delivery';
import IconTechnical from '../../Components/Icons/Technical/Technical';

import bgDelivery from '../../Assets/images/delivery.svg';
import bgProspective from '../../Assets/images/prospective.svg';
import bgTechnical from '../../Assets/images/technical.svg';
import { useItemsProjectTypes } from '../../Providers/ItemsProvider/hooks/useItemsProjectTypes';
const OnboardingProfileFour = () => {
  const classes = useStyles();
  const { data, loading } = useItemsProjectTypes();

  const history = useHistory();
  function handleClick() {
    history.push('/onboarding-profile4');
  }

  return (
    <WrapOnBoarding>
      <Box className={classes.bloc}>
        <Typography className="title">What kind of project would you like to see ?</Typography>
        <Box className={classes.content}>
          <Box className="choice">
            {!loading &&
              data?.items?.map((item, index) => {
                return (
                  <Box className="inputGroup">
                    <input id={`option${index}`} type="checkbox" />
                    <label htmlFor={`option${index}`}>
                      {item?.label}
                      <IconChange className="bgIcon" />
                    </label>
                  </Box>
                );
              })}
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

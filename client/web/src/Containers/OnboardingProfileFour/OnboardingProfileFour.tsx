import useStyles from './style';
import { useHistory } from 'react-router';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import { Box, Button, FormControl, FormLabel, InputBase } from '@material-ui/core';
import TextFieldComponent from '../../Components/TextField/TextField';

const OnboardingProfileFour = () => {
  const classes = useStyles();

  const history = useHistory();
  function handleClick() {
    history.push('/onboarding-profile4');
  }

  return (
    <>
      <WrapOnBoarding>
        On boarding four
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfileFour;

import useStyles from './style';
import { useHistory } from 'react-router';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import { Box, Button, FormControl, FormLabel, InputBase } from '@material-ui/core';
import TextFieldComponent from '../../Components/TextField/TextField';

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
          <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" className="icon">
            <defs>
              <filter id="filter_1">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0 0 0 0 0.53333336 0 0 0 0 0.4392157 0 0 0 0 1 0 0 0 1 0"
                />
              </filter>
            </defs>
            <g id="Group-13" filter="url(#filter_1)">
              <g id="Search" transform="translate(0.5 0.5)">
                <path
                  d="M9.739 0C15.109 0 19.477 4.368 19.477 9.738C19.477 12.2715 18.5047 14.5823 16.9136 16.3165L20.0444 19.4407C20.3374 19.7337 20.3384 20.2077 20.0454 20.5007C19.8994 20.6487 19.7064 20.7217 19.5144 20.7217C19.3234 20.7217 19.1314 20.6487 18.9844 20.5027L15.8159 17.343C14.1491 18.6778 12.0357 19.477 9.739 19.477C4.369 19.477 0 15.108 0 9.738C0 4.368 4.369 0 9.739 0ZM9.739 1.5C5.196 1.5 1.5 5.195 1.5 9.738C1.5 14.281 5.196 17.977 9.739 17.977C14.281 17.977 17.977 14.281 17.977 9.738C17.977 5.195 14.281 1.5 9.739 1.5Z"
                  transform="translate(-0.0002 1.1368684E-13)"
                  id="Combined-Shape"
                  fill="#8870FF"
                  stroke="none"
                />
              </g>
            </g>
          </svg>
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

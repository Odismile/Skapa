import { Box, Button, Container, Typography } from "@material-ui/core";
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import useStyles from "./style";
import img from "../../Assets/images/splash-screen.svg";

const OnboardingSplashScreen = () => {
  const classes = useStyles();

  return (
    <>
      <WrapOnBoarding width={210} marginTop= {40}>
        <Typography variant='h1' className={classes.congrat}>Congratulations,<br></br>your are …</Typography>
        <img src={img}  className={classes.imgSplash} alt="Top" />
        <Box className={classes.btnNext}>
          <Button variant="contained">
            Go !
          </Button>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingSplashScreen;

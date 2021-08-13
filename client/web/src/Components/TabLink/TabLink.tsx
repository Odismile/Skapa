import React from 'react';
import { Box, Button, Step, StepButton, StepLabel, Stepper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Description from '../../Containers/Project/CreateProject/Description/Description';
import Places from '../../Containers/Project/CreateProject/Places/Places';
import Review from '../../Containers/Project/CreateProject/Review/Review';
import Team from '../../Containers/Project/CreateProject/Team/Team';
import useStyles from './style';
import { useTranslation } from 'react-i18next';

const TabLink = () => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({});
  const { t } = useTranslation();

  const getSteps = () => {
    return ['Description', 'Team', 'Places', 'Review'];
  };

  const steps = getSteps();

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Description />;
      case 1:
        return <Team />;
      case 2:
        return <Places />;
      case 3:
        return <Review />;
      default:
        return <Description />;
    }
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <>
      <Box className={classes.root}>
        <Stepper
          nonLinear
          activeStep={activeStep}
          className={classes.customStepper}
          connector={<Box className={classes.connect}></Box>}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton
                onClick={handleStep(index)}
                completed={completed[index]}
                classes={{
                  root: classes.stepButton,
                }}
              >
                <StepLabel
                  classes={{ label: classes.stepText, active: classes.stepActive }}
                  StepIconProps={{
                    classes: {
                      root: classes.stepIcon,
                      text: classes.stepText,
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <Box>
          <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
          <Box className={classes.Btn}>
            <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
              {t(`createProject.next`)}
            </Button>
            <Link to="/" className="link">
              {t(`createProject.skipThisStep`)}
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TabLink;

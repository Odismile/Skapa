import React, { FC } from 'react';
import { Box, Button, Step, StepButton, StepLabel, Stepper, Typography } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';
import classNames from 'classnames';

import Description from '../../Containers/Project/CreateProject/Description/Description';
import Team from '../../Containers/Project/CreateProject/Team/Team';
import Places from '../../Containers/Project/CreateProject/Places/Places';
import Review from '../../Containers/Project/CreateProject/Review/Review';

import useStyles from './style';

const TabLink = () => {
  function getSteps() {
    return ['Description', 'Team', 'Places', 'Review'];
  }

  function getStepContent(step: number) {
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
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({});
  const steps = getSteps();

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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const classes = useStyles();

  return (
    <>
      {/* <Box className={classes.tabList}>
        <Box className="tab_list">
          <Link to="description" className="tab_link active">
            Description
          </Link>
          <Link to="team" className="tab_link">
            Team
          </Link>
          <Link to="places" className="tab_link">
            Places
          </Link>
          <Link to="review" className="tab_link">
            Review
          </Link>
        </Box>
        <Box className="tab_content">
          <Switch>
            <Route path="description" component={Description} />
            <Route path="team" component={Team} />
            <Route path="places" component={Places} />
            <Route path="review" component={Review} />
          </Switch>
        </Box>
      </Box> */}

      <div className={classes.root}>
        <Stepper
          nonLinear
          activeStep={activeStep}
          className={classes.customStepper}
          connector={<div className={classes.connect}></div>}
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
        <div>
          {allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <Box className={classes.Btn}>
                <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                  Next
                </Button>
                <Link to="/" className='link'>Skip this step</Link>
              </Box>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TabLink;

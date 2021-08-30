import { useApolloClient } from '@apollo/client';
import { Box, Button, Step, StepButton, StepLabel, Stepper, Typography } from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { compareAsc } from 'date-fns';
import Description from '../../Containers/Project/CreateProject/Description/Description';
import Places from '../../Containers/Project/CreateProject/Places/Places';
import Review from '../../Containers/Project/CreateProject/Review/Review';
import Team from '../../Containers/Project/CreateProject/Team/Team';
import { useCreateProject } from '../../Providers/ProjectProvider/useCreateProject';
import { useUpdateProject } from '../../Providers/ProjectProvider/useUpdateProject';
import {
  cityVariable,
  dateEndVariable,
  dateStartVariable,
  filesPictureVariable,
  filesVideoVariable,
  initCreateProjectVariable,
  nameProjectVariable,
  projectDescriptionVariable,
  projectIdVariable,
  skillsSelectedVariable,
  typeProjectVariable,
} from '../../ReactiveVariable/Project/createProject';
import { CREATE_PROJECT_CONGRATS } from '../../Routes';
import { displaySnackbar, InitSnackbarData } from '../../Utils';
import { transformSkills } from '../../Utils/transformSkills';
import { useUploadFile } from '../../Utils/uploadFile';
import Loader from '../Loader/Loader';
import useStyles from './style';

const TabLink = () => {
  const classes = useStyles();
  const snackbar = InitSnackbarData;
  const client = useApolloClient();
  const { doCreateProject, loading, data: dataProject } = useCreateProject();
  const { uploadFile, loading: loadingUpload } = useUploadFile();
  const { doUpdateProject, loading: loadingUpdate } = useUpdateProject();
  const history = useHistory();

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({});
  const { t } = useTranslation();

  const getSteps = () => {
    return ['Description', 'Review'];
  };
  // const getSteps = () => {
  //   return ['Description', 'Team', 'Places', 'Review'];
  // };

  const steps = getSteps();

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Description />;
      // case 1:
      //   return <Team />;
      // case 2:
      //   return <Places />;
      case 1:
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
    const now = new Date();
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;

    if (activeStep === 0) {
      if (nameProjectVariable().trim().length === 0) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.nameOfProject`);
        displaySnackbar(client, snackbar);
      } else if (filesPictureVariable() === null) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.picture`);
        displaySnackbar(client, snackbar);
      } else if (typeProjectVariable().trim().length === 0) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.typeProject`);
        displaySnackbar(client, snackbar);
      } else if (cityVariable().trim().length === 0) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.city`);
        displaySnackbar(client, snackbar);
      } else if (dateStartVariable() === null) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.start`);
        displaySnackbar(client, snackbar);
      } else if (dateEndVariable() === null) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.end`);
        displaySnackbar(client, snackbar);
      } else if (compareAsc(dateEndVariable() || now, dateStartVariable() || now) < 0) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.invalidDate`);
        displaySnackbar(client, snackbar);
      } else if (projectDescriptionVariable().trim().length === 0) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.description`);
        displaySnackbar(client, snackbar);
      } else if (skillsSelectedVariable() === null) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.skills`);
        displaySnackbar(client, snackbar);
      } else if (filesVideoVariable() === null) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.video`);
        displaySnackbar(client, snackbar);
      } else {
        if (nameProjectVariable().length) {
          doCreateProject({
            variables: {
              input: {
                data: {
                  Picture: `${process.env.REACT_APP_FIREBASE_BUCKET_PLACE}${localStorage.getItem('idMe')}/${
                    filesPictureVariable()?.[0].name
                  }`,
                  Name: nameProjectVariable(),
                  Type: typeProjectVariable(),
                  Ville: cityVariable(),
                  Date_start: moment(dateStartVariable()).utcOffset(0, false).toISOString(),
                  Date_end: moment(dateEndVariable()).utcOffset(0, false).toISOString(),
                  description: projectDescriptionVariable(),
                  project_skills: transformSkills(skillsSelectedVariable()),
                  Video: `${process.env.REACT_APP_FIREBASE_BUCKET_PLACE}${localStorage.getItem('idMe')}/${
                    filesVideoVariable()?.[0].name
                  }`,
                  status: '1',
                  // teams: [],
                  // item: '',
                },
              },
            },
          }).then(async (result) => {
            if (result.data?.createProject?.project?.id) {
              projectIdVariable(result.data?.createProject?.project?.id);
              await uploadFile(filesPictureVariable());
              await uploadFile(filesVideoVariable());
              initCreateProjectVariable();
              setActiveStep(newActiveStep);
            }
          });
        }
      }
    } else if (activeStep === 3) {
      doUpdateProject({
        variables: { input: { where: { id: dataProject?.createProject?.project?.id ?? '' }, data: { status: '2' } } },
      }).then((result) => {
        if (result.data?.updateProject?.project?.id) {
          history.push(CREATE_PROJECT_CONGRATS);
        }
      });
    } else {
      setActiveStep(newActiveStep);
    }
  };

  const handleStep = (step: number) => () => {
    if (projectIdVariable().trim().length !== 0) {
      setActiveStep(step);
    }
  };

  const handleNextLink = () => {
    if (activeStep !== 3) {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
    } else {
      doUpdateProject({
        variables: { input: { where: { id: dataProject?.createProject?.project?.id ?? '' }, data: { status: '1' } } },
      }).then((result) => {
        if (result.data?.updateProject?.project?.id) {
          history.push(CREATE_PROJECT_CONGRATS);
        }
      });
    }
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
              disabled={loadingUpload || loading || loadingUpdate}
            >
              {activeStep !== 3 ? t(`createProject.next`) : t(`createProject.ValidateAndPostProject`)}
            </Button>
            <Link to="/project/create-project" className="link" onClick={handleNextLink}>
              {activeStep !== 3 ? t(`createProject.skipThisStep`) : t(`createProject.SavAsDraft`)}
            </Link>
          </Box>
        </Box>
        {(loading || loadingUpload) && <Loader />}
      </Box>
    </>
  );
};

export default TabLink;

import { useApolloClient } from '@apollo/client';
import { Box, Step, StepButton, StepLabel, Stepper, Typography } from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { compareAsc } from 'date-fns';
import Description from '../../Containers/Project/CreateProject/Description/Description';
import LoadingButton from '../LoadingButton/LoadingButton';
import Review from '../../Containers/Project/CreateProject/Review/Review';
//import Places from '../../Containers/Project/CreateProject/Places/Places';
//import Team from '../../Containers/Project/CreateProject/Team/Team';
import { useCreateProject } from '../../Providers/ProjectProvider/useCreateProject';
import { useUpdateProject } from '../../Providers/ProjectProvider/useUpdateProject';
import {
  initCreateProjectVariable,
  projectIdVariable,
  createProjectInputVar,
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
    const {
      cityProject,
      dateEndProject,
      dateStartProject,
      pictureProject,
      nameProject,
      typeProject,
      videoProject,
      skillsSelectedVariable,
      descriptionProject,
      isExternalVideo,
      videoUrl,
    }  = createProjectInputVar();
    
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;

    if (activeStep === 0) {
      if (nameProject.trim().length === 0) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.nameOfProject`);
        displaySnackbar(client, snackbar);
      } else if (pictureProject === null) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.picture`);
        displaySnackbar(client, snackbar);
      } else if (typeProject.trim().length === 0) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.typeProject`);
        displaySnackbar(client, snackbar);
      }
      // else if (cityProject().trim().length === 0) {
      //   snackbar.type = 'ERROR';
      //   snackbar.message = t(`createProjectError.city`);
      //   displaySnackbar(client, snackbar);
      // }
      else if (dateStartProject === null) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.start`);
        displaySnackbar(client, snackbar);
      } else if (dateEndProject === null) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.end`);
        displaySnackbar(client, snackbar);
      } else if (compareAsc(dateEndProject || now, dateStartProject || now) < 0) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`createProjectError.invalidDate`);
        displaySnackbar(client, snackbar);
      }
      //  else if (descriptionProject().trim().length === 0) {
      //   snackbar.type = 'ERROR';
      //   snackbar.message = t(`createProjectError.description`);
      //   displaySnackbar(client, snackbar);
      // }
      // else if (skillsSelectedVariable() === null) {
      //   snackbar.type = 'ERROR';
      //   snackbar.message = t(`createProjectError.skills`);
      //   displaySnackbar(client, snackbar);
      // }
      //  else if (videoProject() === null) {
      //   snackbar.type = 'ERROR';
      //   snackbar.message = t(`createProjectError.video`);
      //   displaySnackbar(client, snackbar);
      // }
      else {
        if (nameProject.length) {
          doCreateProject({
            variables: {
              input: {
                data: {
                  Picture: pictureProject?.[0].name
                    ? `${process.env.REACT_APP_FIREBASE_BUCKET_PLACE}${localStorage.getItem('idMe')}/${
                        pictureProject?.[0].name
                      }`
                    : null,
                  Name: nameProject,
                  Type: typeProject,
                  Ville: cityProject,
                  Date_start: moment(dateStartProject).utcOffset(0, false).toISOString(),
                  Date_end: moment(dateEndProject).utcOffset(0, false).toISOString(),
                  description: descriptionProject,
                  project_skills: transformSkills(skillsSelectedVariable),
                  Video:
                    isExternalVideo && videoUrl.length
                      ? videoUrl
                      : videoProject?.[0].name
                      ? `${process.env.REACT_APP_FIREBASE_BUCKET_PLACE}${localStorage.getItem('idMe')}/${
                          videoProject?.[0].name
                        }`
                      : null,
                  status: '1',
                  isExternalVideo: isExternalVideo && videoUrl.length ? isExternalVideo : false,
                  // teams: [],
                  // item: '',
                },
              },
            },
          }).then(async (result) => {
            if (result.data?.createProject?.project?.id) {
              projectIdVariable(result.data?.createProject?.project?.id);
              await uploadFile(pictureProject);
              await uploadFile(videoProject);
              initCreateProjectVariable();
              setActiveStep(newActiveStep);
            }
          });
        }
      }
    } else if (activeStep === 1) {
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
    if (activeStep !== 1) {
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
            <LoadingButton
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
              isLoading={loadingUpload || loading || loadingUpdate}
              disabled={loadingUpload || loading || loadingUpdate}
            >
              {activeStep !== 1 ? t(`createProject.next`) : t(`createProject.ValidateAndPostProject`)}
            </LoadingButton>
            <Link to="/project/create-project" className="link" onClick={handleNextLink}>
              {activeStep !== 1 ? t(`createProject.skipThisStep`) : t(`createProject.SavAsDraft`)}
            </Link>
          </Box>
        </Box>
        {(loading || loadingUpload) && <Loader />}
      </Box>
    </>
  );
};

export default TabLink;

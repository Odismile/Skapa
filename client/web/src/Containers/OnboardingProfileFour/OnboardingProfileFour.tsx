import React, { useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import useStyles from './style';
import IconChange from '../../Components/Icons/Change/Change';
import { useItemsProjectTypes } from '../../Providers/ItemsProvider/hooks/useItemsProjectTypes';
import {
  ageProfil,
  projectsTypeSelectedVariable,
  yourPosition,
  bio,
  skillsSelectedVariable,
  pictureFile,
  videoFile,
} from '../../ReactiveVariable/Profil/profil';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';
import { ONBOARDING_PROFILE7 } from '../../Routes';
import { transformSkills } from '../../Utils/transformSkills';
import { useCreateProfile } from '../../Providers/ProfilProvider/useCreateProfile';
import { getIdMe } from '../../Services';
import { transformSkillsIds } from '../../Utils/TransformSkillsId';

const OnboardingProfileFour = () => {
  const classes = useStyles();
  const { data, loading } = useItemsProjectTypes();
  const { doCreateProfile, loading: loadingProfile } = useCreateProfile();
  const [projectTypeSelected, setProjectTypeSelected] = useState<
    (Items_get_language_items | null)[] | null | undefined
  >([]);
  const history = useHistory();
  function handleClick() {
    console.log(projectTypeSelected);
    //TEST
    doCreateProfile({
      variables: {
        input: {
          data: {
            position: yourPosition(),
            bio: bio(),
            job_seniority_id: ageProfil(),
            picture: pictureFile(),
            video: videoFile(),
            languages: ['1', '2'],
            profile_skills: transformSkillsIds(skillsSelectedVariable()),
            users_id: getIdMe(),
            projects: transformSkillsIds(projectsTypeSelectedVariable()),
          },
        },
      },
    }).then((result) => {});
    history.replace(ONBOARDING_PROFILE7);
  }

  const onClickProjectType = (projectType: Items_get_language_items | null) => {
    if (projectTypeSelected?.length === 0) {
      setProjectTypeSelected([projectType]);
      projectsTypeSelectedVariable([projectType]);
    } else {
      const findSkill = projectTypeSelected?.find((skillItem) => skillItem?.label === projectType?.label);
      if (findSkill) {
        const newSkills = projectTypeSelected?.filter((skillItem) => skillItem?.label !== projectType?.label);
        setProjectTypeSelected(newSkills);
        projectsTypeSelectedVariable(newSkills);
      } else {
        const newSkills = projectTypeSelected && [...projectTypeSelected, projectType];
        setProjectTypeSelected(newSkills);
        projectsTypeSelectedVariable(newSkills);
      }
    }
  };

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
                    <input id={`option${index}`} type="checkbox" onClick={() => onClickProjectType(item)} />
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

import { Box, Button, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Search from '../../Components/Icons/Search/Search';
import {
  ageProfil,
  projectsTypeSelectedVariable,
  yourPosition,
  bio,
  skillsSelectedVariable,
  pictureFile,
  videoFile,
  levelLanguages,
} from '../../ReactiveVariable/Profil/profil';
import { transformSkillsIds } from '../../Utils/TransformSkillsId';
import TextFieldComponent from '../../Components/TextField/TextField';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';
import { useItemsGetSkills } from '../../Providers/ItemsProvider/hooks/useItemsGetSkills';
import { ONBOARDING_PROFILE4, ONBOARDING_PROFILE7 } from '../../Routes';
import useStyles from './style';
import { useCreateProfile } from '../../Providers/ProfilProvider/useCreateProfile';
import { useUploadFile } from '../../Utils/uploadFile';
import Loader from '../../Components/Loader/Loader';

const OnboardingProfileThree = () => {
  const classes = useStyles();
  const { data, loading } = useItemsGetSkills();
  const history = useHistory();

  const { doCreateProfile, loading: loadingProfile } = useCreateProfile();
  const { uploadFile, loading: loadingUpload } = useUploadFile();

  const [loadingUploadFile, setLoadingUploadFile] = useState(false);

  const [searchSkills, setSearchSkills] = useState<(Items_get_language_items | null)[] | null | undefined>();
  const [skillsSelected, setSkillsSelected] = useState<(Items_get_language_items | null)[] | null | undefined>([]);
  const [disabledButton, setDisabledButton] = useState(true);

  const testButtonToEnabled = () => {
    if (skillsSelectedVariable()?.length !== 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  useEffect(() => {
    if (data?.items) {
      setSearchSkills(data?.items);
    }
  }, [data]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value.trim().length !== 0) {
      const skillToSearch = data?.items?.filter((item) =>
        item?.label?.toLocaleLowerCase().includes(event.target.value.toLowerCase()),
      );
      setSearchSkills(skillToSearch);
    } else {
      setSearchSkills(data?.items);
    }
  };

  const handleClick = () => {
    // history.push(ONBOARDING_PROFILE4);

    //TEST
    setLoadingUploadFile(true);
    doCreateProfile({
      variables: {
        input: {
          position: yourPosition(),
          bio: bio(),
          job_seniority: ageProfil(),
          picture: pictureFile()
            ? `${process.env.REACT_APP_FIREBASE_BUCKET_PLACE}${localStorage.getItem('idMe')}/${pictureFile()?.[0].name}`
            : '',
          video: videoFile()
            ? `${process.env.REACT_APP_FIREBASE_BUCKET_PLACE}${localStorage.getItem('idMe')}/${videoFile()?.[0].name}`
            : '',
          languages: (levelLanguages() || [])?.map((e) => ({
            id: e.id,
            level: e.level as any,
          })),
          profile_skills: transformSkillsIds(skillsSelectedVariable()),
          user_id: localStorage.getItem('idMe'),
          projects: transformSkillsIds(projectsTypeSelectedVariable()),
        },
      },
    }).then(async (result) => {
      //if (result.data?.profileCustomizeMeInput?.profile?.id) {
      await uploadFile(pictureFile());
      await uploadFile(videoFile());
      !loadingProfile && history.replace(ONBOARDING_PROFILE7);
      setLoadingUploadFile(false);
      //  }
    });

  };

  const onClickSkill = (skill: Items_get_language_items | null) => {
    if (skillsSelected?.length === 0) {
      setSkillsSelected([skill]);
      skillsSelectedVariable([skill]);
    } else {
      const findSkill = skillsSelected?.find((skillItem) => skillItem?.label === skill?.label);
      if (findSkill) {
        const newSkills = skillsSelected?.filter((skillItem) => skillItem?.label !== skill?.label);
        setSkillsSelected(newSkills);
        skillsSelectedVariable(newSkills);
      } else {
        const newSkills = skillsSelected && [...skillsSelected, skill];
        skillsSelectedVariable(newSkills);
        setSkillsSelected(newSkills);
      }
    }
    testButtonToEnabled();
  };

  return (
    <>
      {loadingUploadFile && <Loader />}
      <WrapOnBoarding>
        <Box className={classes.search}>
          <TextFieldComponent
            label="What are your skills ?"
            name="skills"
            type="text"
            id="skills"
            placeholder="Look for skills"
            onChange={(e) => handleSearch(e)}
          />
          <Search className="iconSearch" />
        </Box>
        <Box className={classes.skillsSelected}>
          {skillsSelected?.map((skill, index) => {
            return (
              <Box className="inputGroup" key={index}>
                <input id={skill?.id + 'selected'} name={skill?.label ?? ''} type="checkbox" />
                <label htmlFor={skill?.id + 'selected'}>{skill?.label ?? ''}</label>
              </Box>
            );
          })}
        </Box>
        <Box className={classes.content}>
          <Box className={classes.skills}>
            {!loading &&
              searchSkills?.map((item, index) => {
                return (
                  <Box className="inputGroup">
                    <input
                      id={`option${index}`}
                      name={`option${index}`}
                      type="checkbox"
                      onClick={() => onClickSkill(item)}
                    />
                    <label htmlFor={`option${index}`}>{item?.label}</label>
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
        <Box component="footer" className={classes.footerPage}>
          <Typography className="link-footer">
            <Link to={ONBOARDING_PROFILE7}>Skip this step</Link>
            {/* <Link to={ONBOARDING_PROFILE4}>Skip this step</Link> */}
          </Typography>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfileThree;

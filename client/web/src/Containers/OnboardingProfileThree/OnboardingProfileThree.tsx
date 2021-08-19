import { Box, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Search from '../../Components/Icons/Search/Search';
import TextFieldComponent from '../../Components/TextField/TextField';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';
import { useItemsGetSkills } from '../../Providers/ItemsProvider/hooks/useItemsGetSkills';
import { skillsSelectedVariable } from '../../ReactiveVariable/Profil/profil';
import useStyles from './style';

const OnboardingProfileThree = () => {
  const classes = useStyles();
  const { data, loading } = useItemsGetSkills();
  const history = useHistory();
  const [searchSkills, setSearchSkills] = useState<(Items_get_language_items | null)[] | null | undefined>();
  const [skillsSelected, setSkillsSelected] = useState<(Items_get_language_items | null)[] | null | undefined>([]);
  const [disabledButton, setDisabledButton] = useState(true);

  const testButtonToEnabled = () => {
    if (skillsSelectedVariable()?.length!==0) {
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

  const handleClick= () => {
    history.push('/onboarding-profile4');
  }

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
    testButtonToEnabled()
  };

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
            onChange={(e) => handleSearch(e)}
          />
          <Search className="iconSearch" />
        </Box>
        <Box className={classes.skills}>
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
                    <input id={`option${index}`} name={`option${index}`} type="checkbox" />
                    <label htmlFor={`option${index}`}>{item?.label}</label>
                  </Box>
                );
              })}
          </Box>
        </Box>
        <Box className={classes.btnNext}>
          <Button variant="contained" onClick={handleClick} disabled={disabledButton}>
            Next
          </Button>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfileThree;

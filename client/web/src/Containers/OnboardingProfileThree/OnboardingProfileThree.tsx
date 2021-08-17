import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import TextFieldComponent from '../../Components/TextField/TextField';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import useStyles from './style';
import Search from '../../Components/Icons/Search/Search';
import { useItemsGetSkills } from '../../Providers/ItemsProvider/hooks/useItemsGetSkills';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';
import { skillsSelectedVariable } from '../../ReactiveVariable/Profil/profil';

const OnboardingProfileThree = () => {
  const classes = useStyles();
  const { data, loading } = useItemsGetSkills();
  const history = useHistory();
  const [skillsSelected, setSkillsSelected] = useState<(Items_get_language_items | null)[] | null | undefined>([]);

  let tabSkills = [];

  function handleClick() {
    history.push('/onboarding-profile4');
  }

  const setTabSkills = (param: String) => {
    console.log(param);
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
          />
          <Search className="iconSearch" />
        </Box>
        <Box className={classes.skills}>
          <Box className="inputGroup">
            <input id="data1" name="data1" type="checkbox" />
            <label htmlFor="data1">data1</label>
          </Box>
        </Box>
        <Box className={classes.content}>
          <Box className={classes.skills}>
            {!loading &&
              data?.items?.map((item, index) => {
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
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfileThree;

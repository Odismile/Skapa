import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import TextFieldComponent from '../../Components/TextField/TextField';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import useStyles from './style';
import Search from '../../Components/Icons/Search/Search';
import { useItemsGetSkills } from '../../Providers/ItemsProvider/hooks/useItemsGetSkills';

const OnboardingProfileThree = () => {
  const classes = useStyles();
  const { data, loading } = useItemsGetSkills();
  const [isClicked,setIsClicked]=useState(false)
  const history = useHistory();
  const handleClick=()=> {
    history.push('/onboarding-profile4');
  }
  const handleSkillsClick = () =>{
    setIsClicked(true)
  }
  const skill = isClicked?<Box className="inputGroup" onClick={handleSkillsClick}>
  <input id="option" name="option" type="checkbox" />
  <label htmlFor="option">fill</label>:null;
</Box>

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
        
        <Box className={classes.content}>
          <Box className={classes.skills}>
            {!loading &&
              data?.items?.map((item, index) => {
                return (
                  <Box className="inputGroup" onClick={handleSkillsClick}>
                    <input id={`option${index}`} name={`option${index}`} type="checkbox" />
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

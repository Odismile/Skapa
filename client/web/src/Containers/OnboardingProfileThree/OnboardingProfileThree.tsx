import React from 'react';
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
  let tabSkills = [];
  const history = useHistory();
  function handleClick() {
    history.push('/onboarding-profile4');
  }
  const setTabSkills = (param: String) => {
    console.log(param);
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
                      // onClick={setTabSkills(item?.label)}
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

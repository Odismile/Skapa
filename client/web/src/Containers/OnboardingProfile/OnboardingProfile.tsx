import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import LanguagesChoice from '../../Components/LanguagesChoice/LanguagesChoice';
import TextFieldComponent from '../../Components/TextField/TextField';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import { useItemsGetlaguage } from '../../Providers/ItemsProvider/hooks/useItemsGetLanguage';
import Skeleton from 'react-loading-skeleton';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';

const OnboardingProfile = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('0-3');
  const { t } = useTranslation();

  const { data, loading } = useItemsGetlaguage();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const history = useHistory();
  function handleClick() {
    history.push('/onboarding-profile2');
  }

  return (
    <>
      <WrapOnBoarding>
        <TextFieldComponent
          label={t(`onBordingProfile.yourPosition`)}
          id="position"
          placeholder="UX Designer"
          type="text"
        />
        <FormControl component="fieldset" className={classes.radio}>
          <FormLabel component="legend">
            {t(`onBordingProfile.jobSeniority`)} ({t(`onBordingProfile.year`)})
          </FormLabel>
          <RadioGroup
            row
            aria-label="years"
            name="years"
            value={value}
            onChange={handleChange}
            className="custom_radio"
          >
            <FormControlLabel value="0-3" control={<Radio />} label="0-3 yrs" />
            <FormControlLabel value="3-8" control={<Radio />} label="3-8 yrs" />
            <FormControlLabel value=">8" control={<Radio />} label="> 8 yrs" />
          </RadioGroup>
        </FormControl>
        <TextFieldComponent
          label={t(`onBordingProfile.nameOfOrganisation`)}
          id="organisation"
          placeholder="GRT Gaz"
          type="text"
        />
        <FormControl component="fieldset" className={classes.languages}>
          <FormLabel component="legend">{t(`onBordingProfile.laguageslevel`)}</FormLabel>
          {loading ? (
            <Skeleton count={2} height={25} />
          ) : (
            <>
              {data?.items?.map((item, index) => {
                return <LanguagesChoice key={index} title={item?.label ?? ''} name={item?.label ?? ''} />;
              })}
            </>
          )}
        </FormControl>
        <Box className={classes.btnNext}>
          <Button variant="contained" onClick={handleClick}>
            {t(`onBordingProfile.next`)}
          </Button>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfile;

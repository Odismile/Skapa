import React, { useState } from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';
import LanguagesChoice from '../../Components/LanguagesChoice/LanguagesChoice';
import TextFieldComponent from '../../Components/TextField/TextField';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import { useItemsGetlaguage } from '../../Providers/ItemsProvider/hooks/useItemsGetLanguage';
import { ageProfil, nameOfOrganisation, yourPosition } from '../../ReactiveVariable/Profil/profil';
import useStyles from './styles';
import { useItemsGetYear } from '../../Providers/ItemsProvider/hooks/useItemsGetYear';

const OnboardingProfile = () => {
  const classes = useStyles();
  const [disabledButton, setDisabledButton] = useState(true);
  const history = useHistory();
  const { t } = useTranslation();
  const [radioButtonValue, setRadioButtonValue] = useState<string>('');

  const { data, loading } = useItemsGetlaguage();
  const { data: dataYears, loading: loadingYears } = useItemsGetYear();

  const testButtonToEnabled = () => {
    if (!!yourPosition() && !!nameOfOrganisation() && !!ageProfil()) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    ageProfil((event.target as HTMLInputElement).value);
    setRadioButtonValue((event.target as HTMLInputElement).value);
    testButtonToEnabled();
  };

  const onChangeYourPosition = (e: React.ChangeEvent<HTMLInputElement>) => {
    yourPosition(e.target.value);
    testButtonToEnabled();
  };

  const onChangeNameOfOrganisation = (e: React.ChangeEvent<HTMLInputElement>) => {
    nameOfOrganisation(e.target.value);
    testButtonToEnabled();
  };

  const handleClick = () => {
    history.push('/onboarding-profile2');
  };

  return (
    <>
      <WrapOnBoarding>
        <TextFieldComponent
          label={t(`onBordingProfile.yourPosition`)}
          id="position"
          placeholder="UX Designer"
          type="text"
          onChange={onChangeYourPosition}
        />
        <FormControl component="fieldset" className={classes.radio}>
          <FormLabel component="legend">
            {t(`onBordingProfile.jobSeniority`)} ({t(`onBordingProfile.year`)})
          </FormLabel>
          {loadingYears && <Skeleton count={2} height={25} />}
          <RadioGroup
            row
            aria-label="years"
            name="years"
            value={radioButtonValue}
            onChange={handleChangeAge}
            className="custom_radio"
          >
            {!loadingYears &&
              dataYears?.items?.map((item, index) => {
                return (
                  <FormControlLabel key={index} value={item?.label} control={<Radio />} label={item?.label ?? ''} />
                );
              })}
          </RadioGroup>
        </FormControl>
        <TextFieldComponent
          label={t(`onBordingProfile.nameOfOrganisation`)}
          id="organisation"
          placeholder="GRT Gaz"
          type="text"
          onChange={onChangeNameOfOrganisation}
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
          <Button variant="contained" onClick={handleClick} disabled={disabledButton}>
            {t(`onBordingProfile.next`)}
          </Button>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfile;

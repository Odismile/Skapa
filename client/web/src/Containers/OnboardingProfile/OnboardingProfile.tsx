import { useReactiveVar } from '@apollo/client';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import { useHistory, Link } from 'react-router-dom';
import LanguagesChoice from '../../Components/LanguagesChoice/LanguagesChoice';
import TextFieldComponent from '../../Components/TextField/TextField';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import { useItemsGetlaguage } from '../../Providers/ItemsProvider/hooks/useItemsGetLanguage';
import { useItemsGetYear } from '../../Providers/ItemsProvider/hooks/useItemsGetYear';
import { ageProfil, yourPosition } from '../../ReactiveVariable/Profil/profil';
import { ONBOARDING_PROFILE2 } from '../../Routes';
import useStyles from './styles';
const OnboardingProfile = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  const [radioButtonValue, setRadioButtonValue] = useState<string>('');
  const position = useReactiveVar(yourPosition);
  // const organisation = useReactiveVar(nameOfOrganisation);
  const age = useReactiveVar(ageProfil);
  // const languages = useReactiveVar(levelLanguages);

  const { data, loading } = useItemsGetlaguage();
  const { data: dataYears, loading: loadingYears } = useItemsGetYear();

  const disabledButton = useMemo(() => {
    if (position?.length && age?.length ) return false;
    return true;
  }, [position, age]);
  const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    ageProfil((event.target as HTMLInputElement).value);
    setRadioButtonValue((event.target as HTMLInputElement).value);
  };

  const onChangeYourPosition = (e: React.ChangeEvent<HTMLInputElement>) => {
    yourPosition(e.target.value);
  };

  // const onChangeNameOfOrganisation = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   nameOfOrganisation(e.target.value);
  // };

  const handleClick = () => {
    history.push(ONBOARDING_PROFILE2);
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
                return <FormControlLabel key={index} value={item?.id} control={<Radio />} label={item?.label ?? ''} />;
              })}
          </RadioGroup>
        </FormControl>
        {/* <TextFieldComponent
          label={t(`onBordingProfile.nameOfOrganisation`)}
          id="organisation"
          placeholder="GRT Gaz"
          type="text"
          onChange={onChangeNameOfOrganisation}
        /> */}
        <FormControl component="fieldset" className={classes.languages}>
          <FormLabel component="legend">{t(`onBordingProfile.laguageslevel`)}</FormLabel>
          {loading ? (
            <Skeleton count={2} height={25} />
          ) : (
            <>
              {data?.items?.map((item, index) => {
                return (
                  <LanguagesChoice key={index} id={item?.id ?? ''} title={item?.label ?? ''} name={item?.label ?? ''} />
                );
              })}
            </>
          )}
        </FormControl>
        <Box className={classes.btnNext}>
          <Button variant="contained" onClick={handleClick} disabled={disabledButton}>
            {t(`onBordingProfile.next`)}
          </Button>
        </Box>
        <Box component="footer" className={classes.footerPage}>
          <Typography className="link-footer">
            <Link to={ONBOARDING_PROFILE2}>Skip this step</Link>
          </Typography>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfile;

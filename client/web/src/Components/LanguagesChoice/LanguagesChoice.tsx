import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { levelLanguages } from '../../ReactiveVariable/Profil/profil';

import useStyles from './style';

interface TextFiedlProps {
  id: string;
  title: string;
  name: string;
}

const LanguagesChoice: FC<TextFiedlProps> = ({ id, title, name }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [levelLanguage, setLevelLanguage] = useState([
    {
      id: '',
      title: '',
      name: '',
      level: '',
    },
  ]);

  const onClickRadioLanguage = (level: string) => {
    if (levelLanguage.length === 0) {
      setLevelLanguage([
        {
          id: id,
          title: title,
          name: name,
          level: level,
        },
      ]);
      levelLanguages([
        {
          id: id,
          title: title,
          name: name,
          level: level,
        },
      ]);
    } else {
      const findId = levelLanguage.find((language) => language.name === name);
      console.log(`findId`, findId);
      if (findId) {
        // const filterLanguage = levelLanguage.filter((language) => language.name !== name);
        // const newLanguages = [
        //   ...filterLanguage,
        //   {
        //     id: id,
        //     title: title,
        //     name: name,
        //     level: level,
        //   },
        // ];
        // setLevelLanguage(newLanguages);
        // levelLanguages(newLanguages);
      } else {
        // setLevelLanguage((prevState) => [
        //   ...prevState,
        //   {
        //     id: id,
        //     title: title,
        //     name: name,
        //     level: level,
        //   },
        // ]);
        // levelLanguages(levelLanguage);
      }
    }
    // console.log(`id`, id);
    // console.log(`title`, title);
    // console.log(`name`, name);
    // console.log(`level`, level);
    // console.log('******************');
  };
  console.log(`levelLanguage`, levelLanguage);

  return (
    <Box className={classes.boxLang}>
      <Typography className="label">{title}</Typography>
      <Box className="contenuRadio">
        <Box className="inputGroup" onClick={() => onClickRadioLanguage(t(`onBordingProfile.basic`))}>
          <input id={name + 1} name={name} type="radio" />
          <label htmlFor={name + 1}>{t(`onBordingProfile.basic`)}</label>
        </Box>
        <Box className="inputGroup" onClick={() => onClickRadioLanguage(t(`onBordingProfile.intermediate`))}>
          <input id={name + 2} name={name} type="radio" />
          <label htmlFor={name + 2}>{t(`onBordingProfile.intermediate`)}</label>
        </Box>
        <Box className="inputGroup" onClick={() => onClickRadioLanguage(t(`onBordingProfile.fluente`))}>
          <input id={name + 3} name={name} type="radio" />
          <label htmlFor={name + 3}>{t(`onBordingProfile.fluente`)}</label>
        </Box>
      </Box>
    </Box>
  );
};

export default LanguagesChoice;

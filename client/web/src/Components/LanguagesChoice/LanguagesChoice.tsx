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
interface Language {
  id: string;
  title: string;
  name: string;
  level: string;
}
let listLanguages: Language[] = [];

const LanguagesChoice: FC<TextFiedlProps> = ({ id, title, name }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [levelLanguage, setLevelLanguage] = useState<Language[] | null>();
  const onClickRadioLanguage = (level: string) => {
    if (listLanguages.length === 0) {
      listLanguages.push({ id: id, title: title, name: name, level: level });
    } else {
      const data = listLanguages.filter((language) => language.id === id)?.map((list, index) => (list.level = level));
      if (data.length === 0) listLanguages.push({ id: id, title: title, name: name, level: level });
    }
    setLevelLanguage(listLanguages);
    console.log(listLanguages);
  };

  return (
    <Box className={classes.boxLang}>
      <Typography className="label">{title}</Typography>
      <Box className="contenuRadio">
        <Box className="inputGroup">
          <input
            id={name + 1}
            name={name}
            type="radio"
            onClick={() => onClickRadioLanguage(t(`onBordingProfile.basic`))}
          />
          <label htmlFor={name + 1}>{t(`onBordingProfile.basic`)}</label>
        </Box>
        <Box className="inputGroup">
          <input
            id={name + 2}
            name={name}
            type="radio"
            onClick={() => onClickRadioLanguage(t(`onBordingProfile.intermediate`))}
          />
          <label htmlFor={name + 2}>{t(`onBordingProfile.intermediate`)}</label>
        </Box>
        <Box className="inputGroup">
          <input
            id={name + 3}
            name={name}
            type="radio"
            onClick={() => onClickRadioLanguage(t(`onBordingProfile.fluente`))}
          />
          <label htmlFor={name + 3}>{t(`onBordingProfile.fluente`)}</label>
        </Box>
      </Box>
    </Box>
  );
};

export default LanguagesChoice;

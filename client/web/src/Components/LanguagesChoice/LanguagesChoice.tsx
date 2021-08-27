import { MouseEvent, useMemo } from 'react';
import { Box, Typography } from '@material-ui/core';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import useStyles from './style';
import { ENUM_LANGUAGES_LEVEL } from '../../types/graphql-global-types';
import { useReactiveVar } from '@apollo/client';
import { Language, levelLanguages } from '../../ReactiveVariable/Profil/profil';
import { isEqual } from 'lodash';

interface TextFiedlProps {
  id: string;
  title: string;
  name: string;
  index?: number;
  handleSetData?: (item: Language[]) => void;
}

const LanguagesChoice: FC<TextFiedlProps> = ({ id, title, name, handleSetData }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const languages = useReactiveVar(levelLanguages);

  const onClickRadio = (level: ENUM_LANGUAGES_LEVEL) => (e: MouseEvent<HTMLInputElement>) => {
    const index = (languages || []).findIndex((i) => i.id === id);
    const item: Language = {
      __typename: 'Items',
      id,
      label: title,
      level,
    };
    let cloneLanguages = [...(languages || [])];
    if (index >= 0) {
      if (isEqual(cloneLanguages[index], item)) cloneLanguages = cloneLanguages.filter((i) => id && item.id !== i.id);
      else cloneLanguages[index] = item;
    } else cloneLanguages = [...cloneLanguages, item];
    levelLanguages(cloneLanguages);
    if (handleSetData) handleSetData(cloneLanguages);
  };
  const selectedLanguage = useMemo(() => {
    return (languages || []).find((i) => i.id === id);
  }, [id, languages]);
  return (
    <Box className={classes.boxLang}>
      <Typography className="label">{title}</Typography>
      <Box className="contenuRadio">
        <Box className="inputGroup">
          <input
            id={name + 1}
            name={name}
            type="radio"
            checked={selectedLanguage?.level === ENUM_LANGUAGES_LEVEL.BASIC}
            value={ENUM_LANGUAGES_LEVEL.BASIC}
            onClick={onClickRadio(ENUM_LANGUAGES_LEVEL.BASIC)}
          />
          <label htmlFor={name + 1}>{t(`onBordingProfile.basic`)}</label>
        </Box>
        <Box className="inputGroup">
          <input
            id={name + 2}
            name={name}
            type="radio"
            checked={selectedLanguage?.level === ENUM_LANGUAGES_LEVEL.INTERMEDIATE}
            value={ENUM_LANGUAGES_LEVEL.INTERMEDIATE}
            onClick={onClickRadio(ENUM_LANGUAGES_LEVEL.INTERMEDIATE)}
          />
          <label htmlFor={name + 2}>{t(`onBordingProfile.intermediate`)}</label>
        </Box>
        <Box className="inputGroup">
          <input
            id={name + 3}
            name={name}
            type="radio"
            checked={selectedLanguage?.level === ENUM_LANGUAGES_LEVEL.FLUENT}
            value={ENUM_LANGUAGES_LEVEL.FLUENT}
            onClick={onClickRadio(ENUM_LANGUAGES_LEVEL.FLUENT)}
          />
          <label htmlFor={name + 3}>{t(`onBordingProfile.fluente`)}</label>
        </Box>
      </Box>
    </Box>
  );
};

export default LanguagesChoice;

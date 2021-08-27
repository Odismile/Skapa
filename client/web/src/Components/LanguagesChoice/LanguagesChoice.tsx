import { MouseEvent, useMemo } from 'react';
import { Box, Typography } from '@material-ui/core';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import useStyles from './style';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';
import { filterTalentVar, languageItem } from '../../ReactiveVariable/Coach/coach';
import { ENUM_LANGUAGES_LEVEL } from '../../types/graphql-global-types';
import { useReactiveVar } from '@apollo/client';

interface TextFiedlProps {
  id: string;
  title: string;
  name: string;
  index?: number;
  handleClick?: (item: languageItem, index: number) => void;
  item?: Items_get_language_items;
}

const LanguagesChoice: FC<TextFiedlProps> = ({ id, title, name, index, item, handleClick }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const filterTalent = useReactiveVar(filterTalentVar);

  const onClickRadio = (level: ENUM_LANGUAGES_LEVEL) => (e: MouseEvent<HTMLInputElement>) => {
    if (item && index !== undefined && handleClick) {
      handleClick(
        {
          ...item,
          level,
        },
        index,
      );
    }
  };
  const selectedLanguage = useMemo(() => {
    return filterTalent.languages.find((i) => i.id === item?.id);
  }, [filterTalent.languages, item?.id]);
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

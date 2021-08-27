import React, { ChangeEvent } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, Typography } from '@material-ui/core';
import useStyles from './style';
import DailyRate from '../DailyRate/DailyRate';
import LanguagesChoice from '../LanguagesChoice/LanguagesChoice';
import { useItemsGetSkills } from '../../Providers/ItemsProvider/hooks/useItemsGetSkills';
import { useItemsGetlaguage } from '../../Providers/ItemsProvider/hooks/useItemsGetLanguage';
import { useReactiveVar } from '@apollo/client';
import { filterTalentVar, languageItem } from '../../ReactiveVariable/Coach/coach';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';
import CheckboxChecked from '../Icons/CheckboxChecked';
import CheckboxLine from '../Icons/CheckboxLine';
import { useItemsGetLevels } from '../../Providers/ItemsProvider/hooks/useItemsGetLevels';
import { isEqual } from 'lodash';

const SearchTalents = () => {
  const classes = useStyles();
  const filterTalent = useReactiveVar(filterTalentVar);
  const { data: dataSkills } = useItemsGetSkills();
  const { data: dataLanguages } = useItemsGetlaguage();
  const { data: dataLevels } = useItemsGetLevels();

  const handleCheck = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    filterTalentVar({
      ...filterTalent,
      [event.target.name]: checked,
    });
  };
  const handleCheckSkill =
    (item: Items_get_language_items, isChecked: boolean) => (event: React.ChangeEvent<HTMLInputElement>) => {
      filterTalentVar({
        ...filterTalent,
        skills: isChecked ? filterTalent.skills.filter((i) => i.id !== item.id) : [...filterTalent.skills, item],
      });
    };
  const handleCheckLevel =
    (item: Items_get_language_items, isChecked: boolean) => (event: React.ChangeEvent<HTMLInputElement>) => {
      filterTalentVar({
        ...filterTalent,
        levels: isChecked ? filterTalent.levels.filter((i) => i.id !== item.id) : [...filterTalent.levels, item],
      });
    };

  const handleCheckLanguage = (item: languageItem, index: number) => {
    let cloneLanguages = [...filterTalent.languages];
    if (index >= 0) {
      if (isEqual(cloneLanguages[index], item)) cloneLanguages = cloneLanguages.filter((i) => i.id !== item.id);
      else cloneLanguages[index] = item;
    } else cloneLanguages = [...cloneLanguages, item];
    filterTalentVar({
      ...filterTalent,
      languages: cloneLanguages,
    });
  };
  return (
    <Box className={classes.searchProject}>
      <FormControl component="fieldset" className="form-control">
        <Box className="form-control-item">
          <Typography component="h2">Profils vérifiés</Typography>
          <Box className="form-control-content">
            <FormControlLabel
              className="form-control-label"
              value="Top Rated"
              control={
                <Checkbox
                  checked={filterTalent.isTopRated}
                  inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                  name="isTopRated"
                  onChange={handleCheck}
                  className="form-checkbox"
                  defaultChecked={filterTalent.isTopRated}
                  icon={<CheckboxLine fontSize="small" />}
                  checkedIcon={<CheckboxChecked fontSize="small" />}
                />
              }
              label="Top Rated"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="Recommanded"
              control={
                <Checkbox
                  checked={filterTalent.isRecommended}
                  defaultChecked={filterTalent.isRecommended}
                  name="isRecommended"
                  onChange={handleCheck}
                  inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                  className="form-checkbox"
                  icon={<CheckboxLine fontSize="small" />}
                  checkedIcon={<CheckboxChecked fontSize="small" />}
                />
              }
              label="Recommanded"
              labelPlacement="start"
            />
          </Box>
        </Box>
        <Box className="form-control-item">
          <Typography component="h2">Level</Typography>
          <Box className="form-control-content">
            {dataLevels?.items?.map((level) => {
              const isChecked = filterTalent.levels.some((i) => i.id === level?.id);
              return (
                level &&
                level?.label && (
                  <FormControlLabel
                    className="form-control-label"
                    value={level.id}
                    control={
                      <Checkbox
                        checked={isChecked}
                        defaultChecked={isChecked}
                        name="isJunior"
                        onChange={handleCheckLevel(level, isChecked)}
                        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                        className="form-checkbox"
                        icon={<CheckboxLine fontSize="small" />}
                        checkedIcon={<CheckboxChecked fontSize="small" />}
                      />
                    }
                    label={level.label}
                    labelPlacement="start"
                  />
                )
              );
            })}
          </Box>
        </Box>
        <Box className="form-control-item">
          <Typography component="h2">Daily Rate</Typography>
          <DailyRate />
        </Box>
        <Box className="form-control-item">
          <Typography component="h2">Skills</Typography>
          <Box className={classes.content}>
            <Box className={classes.skills}>
              {dataSkills?.items?.map((item) => {
                const isChecked = filterTalent.skills.some((i) => i.id === item?.id);
                return (
                  item?.id &&
                  item?.label && (
                    <Box className="inputGroup">
                      <input
                        id={`skill-${item.id}`}
                        name={`skill-${item.id}`}
                        type="checkbox"
                        value={item.id}
                        defaultChecked={isChecked}
                        checked={isChecked}
                        onChange={handleCheckSkill(item, isChecked)}
                      />
                      <label htmlFor={`skill-${item.id}`}>{item.label}</label>
                    </Box>
                  )
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box className="form-control-item">
          <Typography component="h2">Languages</Typography>
          {dataLanguages?.items?.map((item) => {
            const index = filterTalent.languages.findIndex((i) => i.id === item?.id);
            return (
              item?.label &&
              item?.id && (
                <LanguagesChoice
                  name={`language-${item.id}`}
                  id={`language-${item.id}`}
                  item={item}
                  index={index}
                  title={item.label}
                  handleClick={handleCheckLanguage}
                />
              )
            );
          })}
        </Box>
      </FormControl>
    </Box>
  );
};

export default SearchTalents;

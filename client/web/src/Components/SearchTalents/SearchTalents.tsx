import React, { ChangeEvent } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, Typography } from '@material-ui/core';
import useStyles from './style';
import DailyRate from '../DailyRate/DailyRate';
import LanguagesChoice from '../LanguagesChoice/LanguagesChoice';
import { useItemsGetSkills } from '../../Providers/ItemsProvider/hooks/useItemsGetSkills';
import { useItemsGetlaguage } from '../../Providers/ItemsProvider/hooks/useItemsGetLanguage';
import { useReactiveVar } from '@apollo/client';
import { filterTalentVar } from '../../ReactiveVariable/Coach/coach';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';

const SearchTalents = () => {
  const classes = useStyles();
  const filterTalent = useReactiveVar(filterTalentVar);
  const { data: dataSkills } = useItemsGetSkills();
  const { data: dataLanguages } = useItemsGetlaguage();

  const handleCheck = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    filterTalentVar({
      ...filterTalent,
      [event.target.name]: checked,
    });
  };
  const handleCheckSkill = (item: Items_get_language_items) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = filterTalent.skills.some((i) => i.id === item.id);
    filterTalentVar({
      ...filterTalent,
      skills: isChecked ? filterTalent.skills.filter((i) => i.id !== item.id) : [...filterTalent.skills, item],
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
                  name="isRecommended"
                  onChange={handleCheck}
                  inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                  className="form-checkbox"
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
            <FormControlLabel
              className="form-control-label"
              value="Junior"
              control={
                <Checkbox
                  name="isJunior"
                  onChange={handleCheck}
                  inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                  className="form-checkbox"
                />
              }
              label="Junior"
              labelPlacement="start"
            />
            <FormControlLabel
              className="form-control-label"
              value="Senior"
              control={
                <Checkbox
                  name="isSenior"
                  onChange={handleCheck}
                  inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                  className="form-checkbox"
                />
              }
              label="Senior"
              labelPlacement="start"
            />
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
              {dataSkills?.items?.map(
                (item) =>
                  item?.id &&
                  item?.label && (
                    <Box className="inputGroup">
                      <input
                        id={`skill-${item.id}`}
                        name={`skill-${item.id}`}
                        type="checkbox"
                        value={item.id}
                        onChange={handleCheckSkill(item)}
                      />
                      <label htmlFor={`skill-${item.id}`}>{item.label}</label>
                    </Box>
                  ),
              )}
            </Box>
          </Box>
        </Box>
        <Box className="form-control-item">
          <Typography component="h2">Languages</Typography>
          {dataLanguages?.items?.map(
            (item) =>
              item?.label &&
              item?.id && (
                <LanguagesChoice
                  name={`language-${item.id}`}
                  id={`language-${item.id}`}
                  title={item.label}
                  test={() => {}}
                />
              ),
          )}
        </Box>
      </FormControl>
    </Box>
  );
};

export default SearchTalents;

import { Box, Typography } from '@material-ui/core';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './style';

interface TextFiedlProps {
  id: string;
  title: string;
  name: string;
}

const LanguagesChoice: FC<TextFiedlProps> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={classes.boxLang}>
      <Typography className="label">{props.title}</Typography>
      <Box className="contenuRadio">
        <Box className="inputGroup">
          <input id={props.name + 1} name={props.name} type="radio" />
          <label htmlFor={props.name + 1}>{t(`onBordingProfile.basic`)}</label>
        </Box>
        <Box className="inputGroup">
          <input id={props.name + 2} name={props.name} type="radio" />
          <label htmlFor={props.name + 2}>{t(`onBordingProfile.intermediate`)}</label>
        </Box>
        <Box className="inputGroup">
          <input id={props.name + 3} name={props.name} type="radio" />
          <label htmlFor={props.name + 3}>{t(`onBordingProfile.fluente`)}</label>
        </Box>
      </Box>
    </Box>
  );
};

export default LanguagesChoice;

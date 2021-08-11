import { Box, Typography } from '@material-ui/core';
import { FC, useState } from 'react';
import useStyles from './style';

interface TextFiedlProps {
  title: string;
  name: string;
}
const LanguagesChoice: FC<TextFiedlProps> = (props) => {
  const [active, setActive] = useState('active');
  const classes = useStyles();
  return (
    <Box className={classes.boxLang}>
      <Typography className="label">{props.title}</Typography>
      <Box className='contenuRadio'>
        <Box className="inputGroup">
          <input id={props.name + 1} name={props.name} type="radio" />
          <label htmlFor={props.name + 1}>Basic</label>
        </Box>
        <Box className="inputGroup">
          <input id={props.name + 2}name={props.name} type="radio" />
          <label htmlFor={props.name + 2}>Intermediate</label>
        </Box>
        <Box className="inputGroup">
          <input id={props.name + 3} name={props.name} type="radio" />
          <label htmlFor={props.name + 3}>Fluent</label>
        </Box>
      </Box>
    </Box>
  );
};

export default LanguagesChoice;

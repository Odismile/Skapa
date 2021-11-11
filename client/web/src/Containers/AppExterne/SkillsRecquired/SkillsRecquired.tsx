import { Box, Typography } from '@material-ui/core';

import useStyles from './style';

const SkillsRecquired = () => {
  const classes = useStyles();
  return (
    <Box className={classes.skills_recquired} >
      <label>Skills recquired :</label>
      <Box className="skills_list">
        <Typography className="skill_item" component="span">HTML/CSS</Typography>
        <Typography className="skill_item" component="span">Angular</Typography>
        <Typography className="skill_item" component="span">Protopie</Typography>
      </Box>
    </Box>
  );
};

export default (SkillsRecquired);

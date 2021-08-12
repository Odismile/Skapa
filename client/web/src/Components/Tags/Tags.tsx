import { Box, Chip, Typography } from '@material-ui/core';
import useStyles from './style';

const Tags = () => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <Typography variant='h6' className="title">Tags</Typography>
      <Box className={classes.tags}>
        <Chip label="Sketch"/>
        <Chip label="Figma"/>
        <Chip label="Miro"/>
        <Chip label="Adobe XD"/>
        <Chip label="Protopie"/>
        <Chip label="InVision"/>
        <Chip label="HTML/CSS"/>
        <Chip label="Angular"/>
        <Chip label="Illustrator"/>
      </Box>
    </Box>
  );
};

export default Tags;

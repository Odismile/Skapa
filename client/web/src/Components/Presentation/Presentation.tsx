import { Box, Chip, Link, TextareaAutosize, Typography } from '@material-ui/core';
import useStyles from './style';

const Presentation = () => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <TextareaAutosize
        minRows={4}
        maxRows={4}
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
      />
      <Box className='link'>
        <Link href='#'>Show more</Link>
      </Box>
    </Box>
  );
};

export default Presentation;

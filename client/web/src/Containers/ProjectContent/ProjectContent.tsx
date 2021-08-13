import { Box, Button } from '@material-ui/core';
import CardReview from '../../Components/CardReview/CardReview';
import FormerProject from '../../Components/FormerProjects/FormerProjects';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import useStyles from './styles';

const ProjectContent = () => {
  const classes = useStyles();
  return (
    <>
      <SearchFilter />
      <Box className={classes.content}>
        <CardReview />
        <Box className='btnContribute'>
          <Button>Contribute</Button>
        </Box>
      </Box>

      <Box className={classes.content}>
        <CardReview />
        <Box className='btnContribute'>
          <Button>Contribute</Button>
        </Box>
      </Box>
    </>
  );
};

export default ProjectContent;

import { Box, Button, Divider, Link, Typography } from '@material-ui/core';
import FormerProject from '../../../Components/FormerProjects/FormerProjects';
import Pitch from '../../../Components/Pitch/Pitch';
import Place from '../../../Components/Place/Place';
import Presentation from '../../../Components/Presentation/Presentation';
import SimpleCardTalents from '../../../Components/SimpleCardTalents/SimpleCardTalents';
import useStyles from './styles';
import image_place1 from '../../../Assets/images/place-1.png';
import Wifi from '../../../Components/Icons/Wifi';


const FichePlaces = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Place />
      <Box className='presentation'>
        <Typography variant="h6" className="title">
          Présentation
        </Typography>
        <Presentation />
      </Box>
      <Box className="picture">
        <Typography variant="h6" className="title">
          Pictures
        </Typography>
        <Box className="list-picture">
          <figure>
            <img src={image_place1} alt="pictures" />
          </figure>
          <figure>
            <img src={image_place1} alt="pictures" />
          </figure>
          <figure>
            <img src={image_place1} alt="pictures" />
          </figure>
        </Box>
        <Box className="link">
          <Link href="">Show more</Link>
        </Box>
      </Box>
      <Box className="equipement">
        <Box className="equipement-item">
          Wifi <Wifi />
        </Box>
        <Box className="equipement-item">
          Wifi <Wifi />
        </Box>
        <Box className="equipement-item">
          Wifi <Wifi />
        </Box>
        <Box className="equipement-item">
          Wifi <Wifi />
        </Box>
        <Box className="equipement-item">
          Wifi <Wifi />
        </Box>
        <Box className="equipement-item">
          Wifi <Wifi />
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" className="title">
          Former projects
        </Typography>
        <FormerProject />
      </Box>
      <Box>
        <Pitch />
      </Box>
      <Box className="boxBtn">
        <Button className="btnAdd">Add to Project</Button>
      </Box>
      <Divider />
      <Typography className="textSuggest">
        You like Emma ? <br></br>You will like :
      </Typography>
      <SimpleCardTalents />
    </Box>
  );
};

export default FichePlaces;

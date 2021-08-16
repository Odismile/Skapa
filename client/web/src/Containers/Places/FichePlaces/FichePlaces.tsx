import { Box, Button, Divider, Link, TextField, Typography } from '@material-ui/core';
import FormerProject from '../../../Components/FormerProjects/FormerProjects';
import Pitch from '../../../Components/Pitch/Pitch';
import Place from '../../../Components/Place/Place';
import Presentation from '../../../Components/Presentation/Presentation';
import SimpleCardTalents from '../../../Components/SimpleCardTalents/SimpleCardTalents';
import useStyles from './styles';
import image_place1 from '../../../Assets/images/place-1.png';
import Wifi from '../../../Components/Icons/Wifi';
import Board from '../../../Components/Icons/Board';
import Clipboard from '../../../Components/Icons/Clipboard';
import Coffee from '../../../Components/Icons/Coffee';
import Cast from '../../../Components/Icons/Cast';
import Computer from '../../../Components/Icons/Computer';


const FichePlaces = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className="places">
        <Place />
      </Box>
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
        <Typography variant="h6" className="title">
          Equipements
        </Typography>
        <Box className="equipement-item">
          Wifi <Wifi />
        </Box>
        <Box className="equipement-item">
          White board <Board />
        </Box>
        <Box className="equipement-item">
          Paper board <Clipboard />
        </Box>
        <Box className="equipement-item">
          Coffee machine and snacks <Coffee />
        </Box>
        <Box className="equipement-item">
          TV broadcast <Cast />
        </Box>
        <Box className="equipement-item">
          Computer <Computer />
        </Box>
      </Box>
      <Box className="disponibilite">
        <Typography variant="h6" className="title">
          Disponibility
        </Typography>
        <Box className="grid_field">
                <Box className="field_item field_date">
                  <TextField
                    id="dateStarts"
                    label="Starts"
                    type="date"
                    defaultValue="12/05/21"
                    className="input_date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
                <Box className="field_item field_date">
                  <TextField
                    id="dateEnd"
                    label="Ends"
                    type="date"
                    defaultValue="12/05/21"
                    className="input_date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Box>
      </Box>
      <Box className="contact">
        <Typography variant="h6" className="title">
        Contact
        </Typography>
        <p>
          <span>Phone :</span> +33 1 56 45 78 96
        </p>
        <p>
          <span>Email : </span> wework.lafayette@wework.fr
        </p>
      </Box>
      <Box className="boxBtn">
        <Button className="btnAdd">Book this place for a project</Button>
      </Box>
      <Box>
        <Typography variant="h6" className="title">
          Similar places
        </Typography>
        <FormerProject />
      </Box>
    </Box>
  );
};

export default FichePlaces;

import { Box, Card, CardContent, CardMedia, Checkbox, IconButton, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import image_bitmap from '../../Assets/images/Bitmap.png';
import imgPlace from '../../Assets/images/lab.svg';
import { projects } from '../../GraphQL/project/types/projects';
import Award from '../Icons/Award';
import Cast from '../Icons/Cast';
import CheckboxChecked from '../Icons/CheckboxChecked';
import CheckboxLine from '../Icons/CheckboxLine';
import Computer from '../Icons/Computer';
import Heart from '../Icons/Heart';
import HeartLine from '../Icons/HeartLine';
import Photo from '../Icons/Photo';
import Wifi from '../Icons/Wifi';
import useStyles from './style';

interface PlaceProps {
  data?: projects | undefined;
}

// const handleClick = (event: any) => {
//   event.stopPropagation();
// };

const Place: FC<PlaceProps> = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();
  const [check, setCheck] = React.useState(false);

  const goToDetailsPlace = (event: any) => {
    history.push('/details-place');
    event.stopPropagation();
  };

  const handleClick:React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    setCheck(current => !current)
  };
  return (
    <Box className={classes.root} onClick={goToDetailsPlace}>
      <Card className="card">
        <CardMedia className="media" image={imgPlace} title="image">
          <Box className="bitmap">
            <figure className="bitmap-image">
              <img src={image_bitmap} alt="bitmap" />
            </figure>
          </Box>
          <IconButton className="btn-favori" aria-label="favori" onClick={handleClick}>
            {check ? <HeartLine className="iconHeartOutlined" /> : <Heart  className="iconHeart"/>}
          </IconButton>
        </CardMedia>
        <CardContent className="content">
          <Box className="name-money">
            <Typography className="title" component="p">
              WeWork - Lafayette
            </Typography>
            <Box className="chips">870 $/ day</Box>
          </Box>
          <Box className="top-rated">
            <Award /> Top rated
          </Box>
          <Typography component="p">
            <span>Location :</span> 238 rue Lafayette, 75009 <br></br> Bâtiment WeWork - 3e étage - salle Rousseau
          </Typography>
          <Typography component="p">
            <span>Capacity : </span> 40 personnes
          </Typography>
          <Typography component="p" className="equipement">
            <span>Equipement : </span>
            <Box className="icon-equipement">
              <Wifi className="icon" />
              <Photo className="icon" />
              <Computer className="icon" />
              <Cast className="icon" />
            </Box>
          </Typography>

          {/* si bouton */}
          {/* <Box className={classes.addProject}>
            <Button variant="contained" className={classes.button}>
              Add to a project
            </Button>
          </Box> */}

          {/* Si checkbox */}
          <Box className={classes.check}>
            <Checkbox 
            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} 
            className="checkbox"
            icon= {<CheckboxLine fontSize='small' />}
            checkedIcon={<CheckboxChecked fontSize='small'/>}
             />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Place;

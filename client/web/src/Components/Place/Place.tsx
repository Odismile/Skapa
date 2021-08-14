import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Checkbox, IconButton, Typography } from '@material-ui/core';
import useStyles from './style';
import imgPlace from '../../Assets/images/lab.svg';
import Wifi from '../Icons/Wifi';
import Photo from '../Icons/Photo';
import Computer from '../Icons/Computer';
import Cast from '../Icons/Cast';
import Rate from '../Icons/Rate';
import image_bitmap from '../../Assets/images/Bitmap.png';
import HeartLine from '../Icons/HeartLine';

const Place = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Card className={classes.root}>
        <CardMedia className='media' image={imgPlace} title="image">
          <Box className="bitmap">
            <figure className="bitmap-image">
              <img src={image_bitmap} alt="bitmap" />
            </figure>
          </Box>
          <IconButton className="btn-favori" aria-label="favori">
            <HeartLine />
          </IconButton>
        </CardMedia>
        <CardContent className='content'>
          <Box className='name-money'>
            <Typography className="title" component="p">
              WeWork Lafayette
            </Typography>
            <Box className='chips'>
              870 $/ day
            </Box>
          </Box>
          <Box className="top-rated">
            <Rate /> Top rated
          </Box>
          <Typography component="p">
              <span>Location :</span> 238 rue Lafayette, 75009 <br></br> Bâtiment WeWork - 3e étage - salle Rousseau
          </Typography>
          <Typography component="p">
              <span>Capacity : </span> 40 personnes
          </Typography>
          <Typography component="p" className="equipement">
              <span>Equipement : </span>
              <Box className="icon-equipement"><Wifi className="icon" /><Photo className="icon" /><Computer className="icon" /><Cast className="icon" /></Box>
          </Typography>
          
          {/* si bouton */}
          {/* <Box className={classes.addProject}>
            <Button variant="contained" className={classes.button}>
              Add to a project
            </Button>
          </Box> */}

          {/* Si checkbox */}
          <Box className={classes.check}>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="checkbox"/>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Place;

import React from 'react';
import { Avatar, Box, Button, Card, CardMedia, Slider, Typography, withStyles } from '@material-ui/core';
import useStyles from './style';
import imgHead from '../../../Assets/images/head.png';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const CardCreatorDraft = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className="image">
        <Box className="category">Design Produit</Box>
        <Typography className='no-picture'>No picture</Typography>
      </CardMedia>
      <Box className="details">
        <Typography className="title">Kit de composants Miro customisables</Typography>
      </Box>
      <Box className="teams">
        <Box>
          <Typography className="name-adress">Lorem - Paris</Typography>
          <Typography className="name-adress"><span>Duration :</span> 60 days</Typography>
          <Typography className="name-adress"><span>Missing profiles :</span> UX Designer</Typography>
        </Box>
        <Box className="imageTeam">
          <Typography className="textTeam">
            <span>Team</span>
          </Typography>
          <AvatarGroup className="avatar" max={4}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Navis Howard" src="/static/images/avatar/2.jpg" />
          </AvatarGroup>
        </Box>
      </Box>
      <Box className="foot">
        <Button>Finish editing</Button>
      </Box>
    </Card>
  );
};

export default CardCreatorDraft;

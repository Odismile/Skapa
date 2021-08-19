import React from 'react';
import { Avatar, Box, Button, Card, CardMedia, Divider, Typography } from '@material-ui/core';
import useStyles from './style';
import imgHead from '../../../Assets/images/head.png';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Award from '../../Icons/Award';

const CardContributor = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia image={imgHead} className="image">
        <Box className="category">Design Produit</Box>
      </CardMedia>
      <Box className="details">
        <Typography className="title">« Greener », un mode de vie plus green sur votre lieu de travail</Typography>
        <Button className="btn">Finished</Button>
      </Box>
      <Box className="teams">
        <Typography className="name-adress">
          <span>Founder : Émile Jacquet</span> - Lorem - Paris
        </Typography>
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
      <Divider className="divider" />
      <Typography className="badge"><Award /> BEST CONTRIBUTOR</Typography>
      <Typography className="resume">
        You gave<span>8 769 £</span>to support this project
      </Typography>
    </Card>
  );
};

export default CardContributor;

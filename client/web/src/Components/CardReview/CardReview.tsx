import { Avatar, Box, Card, CardContent, CardMedia, IconButton, Slider, Typography, withStyles } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import imgCard from '../../Assets/images/lab.svg';
import { project } from '../../GraphQL/project/types/project';
import Heart from '../Icons/Heart';
import Trending from '../Icons/Trending';
import useStyles from './style';

const PrettoSlider = withStyles({
  root: {
    color: '#9067ff',
    height: 5,
    padding: 0,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
    display: 'none',
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 5,
    borderRadius: 4,
  },
  rail: {
    height: 5,
    borderRadius: 4,
  },
})(Slider);

interface CardReviewProps {
  data?: project | undefined;
}

const handleClick = (event:any) =>{
  event.stopPropagation();
}

const CardReview: FC<CardReviewProps> = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();
  const goToDetailsProjects = (event:any) =>{
    history.push('/details-projects');
    event.stopPropagation();
  }
  return (
    <Card className={classes.root} onClick={goToDetailsProjects}>
      <CardMedia className={classes.media} image={imgCard} title="image" />
      <CardContent className={classes.content}>
        <Box className="detail-top">
            <Typography className="title" component="p">
            Lorem ipsum <br></br> Sit amet.
            </Typography>
            <Typography component="p" className="trending">
              <Trending /> TRENDING UP
            </Typography>
          </Box>
        <Box className="details">
          <Typography component="p" className="name-adress">
            <span>Founder : Alexander Holland</span> - Lorem - Paris
          </Typography>
          <Box className="teams">
            <Typography component="p" className="name-adress">
              <span>Team</span>
            </Typography>
            <AvatarGroup max={3} className="avatarGroup">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
          </Box>
        </Box>
        <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
        <Box className="info">
          <Box>
            <Typography component="p" className="active">
              0
            </Typography>
            <Typography component="p" className="active">
              Your expenses are 78 000 $
            </Typography>
          </Box>
          <Box>
            <Typography component="p">0</Typography>
            <Typography component="p">contributors</Typography>
          </Box>
          <Box>
            <Typography component="p">0</Typography>
            <Typography component="p">days left</Typography>
          </Box>
        </Box>
      </CardContent>
      <Box className="category">LAB</Box>
      <IconButton className="btn-favori" onClick={handleClick}>
        <Heart className="iconHeart" />
      </IconButton>
      <Box className="bgBlack"></Box>
    </Card>
  );
};

export default CardReview;

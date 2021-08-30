import React from 'react';
import { Avatar, Box, Button, Card, CardMedia, Slider, Typography, withStyles } from '@material-ui/core';
import useStyles from './style';
import imgHead from '../../../Assets/images/head.png';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const PrettoSlider = withStyles({
  root: {
    color: '#9067ff!important',
    height: 5,
    padding: 0,
    marginTop: 10,
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
    borderRadius: 14,
  },
  rail: {
    height: 5,
    borderRadius: 14,
  },
})(Slider);

const CardCreatorFinished = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia image={imgHead} className="image">
        <Box className="category">Design Produit</Box>
      </CardMedia>
      <Box className="details">
        <Typography className="title">Kit de composants Miro customisables</Typography>
        <Button className="btn">Success</Button>
      </Box>
      <Box className="teams">
        <Typography className="name-adress">Lorem - Paris</Typography>
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
      <PrettoSlider valueLabelDisplay="auto" disabled={true} aria-label="pretto slider" defaultValue={100} />
      <Box className="info">
        <Box>
          <Typography component="p" className="active bold">
            11 734 $
          </Typography>
        </Box>
        <Box>
          <Typography component="p" className="bold">
            12
          </Typography>
          <Typography component="p">contributors</Typography>
        </Box>
        <Box>
          <Typography component="p" className="bold">
            0
          </Typography>
          <Typography component="p">days left</Typography>
        </Box>
      </Box>
      <Box className="foot">
        <Button>Relaunch</Button>
      </Box>
    </Card>
  );
};

export default CardCreatorFinished;

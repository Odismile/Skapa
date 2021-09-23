import React from 'react';
import { Avatar, Box, Card, CardMedia,Typography } from '@material-ui/core';
import useStyles from './style';
import imgHead from '../../../Assets/images/head1.png';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Calendar from '../../Icons/Calendar';
//import Star from '../../Icons/Star';
import Rating from '@material-ui/lab/Rating';

const CardTalentFinished = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState<number | null>(3);
  return (
    <Box>
      <Typography className={classes.rating}>
        Mission rate :{' '}
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          classes={{ iconFilled : classes.iconFilled, iconEmpty : classes.iconEmpty, disabled: classes.disabled }}
          disabled
          className='rate'
        />
      </Typography>
      <Card className={classes.card}>
        <CardMedia image={imgHead} className="image">
          <Box className="category">Innovation</Box>
        </CardMedia>
        <Box className="details">
          <Typography className="title">Lorem Ipsum Sit Amet</Typography>
          <Box className="date">
            <Calendar /> <span>20/03/21 - 20/06/21</span>
          </Box>
        </Box>
        <Box className="teams">
          <Typography className="name-adress">
            <span>Founder : Johanna Lorin</span> - Lorem - Paris
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
        <Box className="skillsContent">
          <Typography className="title">Skills recquired :</Typography>
          <Box className="skillsWrap">
            <Box className="skills">HTML/CSS</Box>
            <Box className="skills">Angular</Box>
            <Box className="skills">Protopie</Box>
          </Box>
        </Box>
        <Typography className="level">
          Level acquired : <span>TOP RATED</span>
        </Typography>
      </Card>
    </Box>
  );
};

export default CardTalentFinished;

import React from 'react';
import { Avatar, Box, Card, CardMedia, Slider, Typography } from '@material-ui/core';
import useStyles from './style';
import imgHead from '../../../Assets/images/head1.png';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Calendar from '../../Icons/Calendar';

const CardTalentOngoing = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
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
          <Box className="skills">UI/UX Designer</Box>
        </Box>
      </Box>
      <Box className='slider'>
        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" classes={{ rail:classes.rail, track:classes.track, thumb:classes.thumb}}/>
        <Typography className='valueSlide'>19 days left</Typography>
      </Box>
    </Card>
  );
};

export default CardTalentOngoing;

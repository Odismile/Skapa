import React from 'react';
import { Avatar, Box, Card, CardContent, CardMedia, Checkbox, Typography } from '@material-ui/core';
import useStyles from './style';
import imgPlace from '../../Assets/images/lab.svg';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Calendar from '../Icons/Calendar';

const CardProject = () => {
  const classes = useStyles();
  return (
    <Box>
      <Card className={classes.root}>
        <CardMedia className="media" image={imgPlace} title="image"></CardMedia>
        <CardContent className="contenus">
          <Typography component="p" className="text">
            Lorem Ipsum Sit<br></br> Amet
          </Typography>
          <Box>
            <Typography component="p" className="textMini">
              <Calendar className="iconCalendar" /> 20/03/21 - 20/06/21
            </Typography>
            <Box className="BoxTeam">
              <Typography component="p" className="textMini">
                Team
              </Typography>
              <AvatarGroup className="avatar" max={4}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Navis Howard" src="/static/images/avatar/2.jpg" />
              </AvatarGroup>
            </Box>
          </Box>
        </CardContent>
        <Box className={classes.badge}>Innovation</Box>
        <Box className={classes.check}>
          <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="checkbox" />
        </Box>
      </Card>
      <Typography component="p" className={classes.foot}>
        You will have to contribute <span>12 000 $</span>to contribute with Emma
      </Typography>
    </Box>
  );
};

export default CardProject;

import React, { FC } from 'react';
import { Avatar, Card, CardActionArea, CardActions, CardContent, CardMedia, Box, Button, IconButton, Typography } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import classNames from 'classnames';
import useStyles from './style';

import Calendar from '../../../Components/Icons/Calendar';
import Award from '../../../Components/Icons/Award';

import Team from '../../../Components/Team/Team';
import UserAvatar from '../../Assets/images/user_avatar.jpg';
import requestPhoto from '../../../Assets/images/photo_request.png';


const OngoingItem = () => {
  const classes = useStyles();
  
  return (
    <Card className={classNames(classes.onGoingItem_bloc, "onGoingItem_bloc")}>
      <CardContent className={classes.cardContentroot} >
        <Box className="cardMedia_content">
          <CardMedia
            className="media"
            image={requestPhoto}
            title="ongoing show"
          />
          <Typography component="span" className="labeled">Innovation</Typography>
        </Box>
        <Box className="header_item" component="header">
          <Typography variant="h2">Lorem Ipsum Sit Amet</Typography>
          <Typography className="date_range"><Calendar /><span>20/03/21 - 20/06/21</span></Typography>
        </Box>
        <Box className="body_item" component="article">
          <Box className="infos_content">
            <Typography className=""><label>Founder :</label><span><strong>Johanna Lorin </strong> - Lorem - Paris</span></Typography>
            <Team />
          </Box>
          <Box className="skills_recquired">
            <label>Skills recquired :</label>
            <Box className="skills_list">
              <Typography className="skill_item" component="span">HTML/CSS</Typography>
              <Typography className="skill_item" component="span">Angular</Typography>
              <Typography className="skill_item" component="span">Protopie</Typography>
            </Box>
          </Box>
          <Typography className="level_infos"><label>Level acquired : </label><span><Award />TOP RATED</span></Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OngoingItem;

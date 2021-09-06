import React, { FC } from 'react';
import { Avatar, Card, CardActionArea, CardActions, CardContent, CardMedia, Box, Button, IconButton, Typography } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import classNames from 'classnames';
import useStyles from './style';

import Calendar from '../../../Components/Icons/Calendar';
import Checked from '../../../Components/Icons/CheckboxChecked';
import Cross from '../../../Components/Icons/Cross';

import Team from '../../../Components/Team/Team';
import UserAvatar from '../../Assets/images/user_avatar.jpg';


const RequestItem = () => {
  const classes = useStyles();
  
  return (
    <Card className={classNames(classes.requestItem_bloc, "requestItem_bloc")}>
      <CardActionArea>
        <CardMedia
          className="media"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box className="header_item" component="header">
            <Typography variant="h2">Lorem Ipsum Sit Amet</Typography>
            <Typography className="date_range"><Calendar /><span>20/03/21 - 20/06/21</span></Typography>
          </Box>
          <Box className="body_item" component="article">
            <Box className="infos">
              <Typography className=""><label>Founder :</label><span><strong>Johanna Lorin</strong> - Lorem - Paris</span></Typography>
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
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="validate">
          <Checked />
        </IconButton>
        <IconButton aria-label="remove">
          <Cross />
        </IconButton>
      </CardActions>
      
    </Card>
  );
};

export default RequestItem;

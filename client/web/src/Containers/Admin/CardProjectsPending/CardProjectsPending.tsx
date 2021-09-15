import React from 'react';
import { Avatar, Box, Card, CardContent, CardMedia, CardActions, Checkbox, IconButton, Typography } from '@material-ui/core';
import useStyles from './style';
// components
import ImgAppExterne from '../../AppExterne/ImgAppExterne';
import Team from '../../../Components/Team/Team';
import SkillsRecquired from '../../AppExterne/SkillsRecquired';

// icons
import Calendar from '../../../Components/Icons/Calendar';
import Check from '../../../Components/Icons/Check';
import Cross from '../../../Components/Icons/Cross';

// images
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import requestPhoto from '../../../Assets/images/photo_request.png';
import UserAvatar from '../../../Assets/images/user_avatar.jpg';

const CardProject = () => {
  const classes = useStyles();
  return (
      <Card className={classes.ProjectItem_pending}>
        <CardContent className={classes.card_root}>
          <Box className="cardMedia_content" >
            <CardMedia className="media" image={requestPhoto} title="image"></CardMedia>
            <Typography className="labeled" component="span" >Innovation</Typography>
          </Box>
          <Box className="header_item" component="header">
            <Typography variant="h2">Lorem Ipsum Sit Amet</Typography>
            <Typography className="date_range"><Calendar /><span>20/03/21 - 20/06/21</span></Typography>
          </Box>
          <Box className="body_item" component="article">
            <Typography className="infos_text"><label>Founder :</label><span><strong>Johanna Lorin</strong> - Lorem - Paris</span></Typography>
            <Box className="skills_recquired" >
              <label>Skills recquired :</label>
              <Box className="skills_list">
                <Typography className="skill_item" component="span">HTML/CSS</Typography>
                <Typography className="skill_item" component="span">Angular</Typography>
                <Typography className="skill_item" component="span">Protopie</Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
        <CardActions className="card-actions" >
          <Box className="team_bloc">
            <Typography className="team_title">Team</Typography>
            <AvatarGroup className="avatar" max={4}>
              <Avatar alt="user Avatar" src={UserAvatar} />
              <Avatar alt="user Avatar" src={UserAvatar} />
              <Avatar alt="user Avatar" src={UserAvatar} />
            </AvatarGroup>
          </Box>
          <Box className="btns-group">
            <IconButton aria-label="validate" className="btn btn_validate">
              <Check />
            </IconButton>
            <IconButton aria-label="remove" className="btn btn_remove">
              <Cross />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
  );
};

export default CardProject;

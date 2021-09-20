import React, { FC }from "react";
import { 
  Avatar, 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions, 
  CardActionArea, 
  IconButton, 
  Link,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  Slider,
  withStyles,
} from '@material-ui/core';

import Player from 'video-react';


import useStyles from './style';
// components
// import ImgAppExterne from '../../AppExterne/ImgAppExterne';
// import Team from '../../../Components/Team/Team';
// import SkillsRecquired from '../../AppExterne/SkillsRecquired';

// icons
import Calendar from '../../../Components/Icons/Calendar';
import Check from '../../../Components/Icons/Check';
import Cross from '../../../Components/Icons/Cross';

// images
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import requestPhoto from '../../../Assets/images/photo_request.png';
import UserAvatar from '../../../Assets/images/user_avatar.jpg';

// interface IProjectPending {
//   PhotoCard: string;
//   LabelCard?: string;
//   ProjectName : string;
//   DateRange: string;
//   FounderName: string;
// }

const PrettoSlider = withStyles({
  root: {
    color: '#9067ff !important',
    height: 8,
    padding: 0,
  },
  thumb: {
    display: 'none',
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 8,
  },
  rail: {
    height: 8,
    borderRadius: 8,
  },
})(Slider);

const CardProject = () => {
  const classes = useStyles();

  // const { 
  //   PhotoCard, 
  //   LabelCard="innovation", 
  //   ProjectName,
  //   FounderName,
  // } = propsCardProject;

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const handleClickOpen = (scrollType : any) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="cardContainer">
      <Card className={classes.ProjectItem_pending}>
        <CardActionArea onClick={handleClickOpen('paper')} >
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
        </CardActionArea>
      </Card>
      {/* Dialog */}
      <Dialog
        className={classes.modal_detail_project}
        open={open}
        onClose={handleClose}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth='md'
      >
        <DialogContent className="dialog-content">
          <Box className="media_content">
            <figure className="media">
              <img src={requestPhoto} alt="" title="" />
            </figure>
            <Typography className="labeled" component="span" >Innovation</Typography>
          </Box>
          <Box className="header_item" component="header">
            <Typography variant="h2">Lorem Ipsum Sit Amet</Typography>
            <Typography className="date_range"><Calendar /><span>20/03/21 - 20/06/21</span></Typography>
          </Box>
          <Box className="body_item" component="article">
            <Box className="left_content">
              <Typography className="infos_text"><label>Founder :</label> <span><strong>Johanna Lorin</strong> - Lorem - Paris</span></Typography>
              <Box className="team_bloc">
                <Typography className="team_title">Team</Typography>
                <AvatarGroup className="avatar" max={4}>
                  <Avatar alt="user Avatar" src={UserAvatar} />
                  <Avatar alt="user Avatar" src={UserAvatar} />
                  <Avatar alt="user Avatar" src={UserAvatar} />
                </AvatarGroup>
              </Box>
              <Box className="sliderRange_bloc">
                <PrettoSlider
                  className="sliderRange"
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={50}
                  disabled={true}
                />
                <Box className="sliderText">
                  <Typography className="active sliderText_item">
                    <span className="value">11 734 $</span><br />
                    <span className="text">raised</span>
                  </Typography>

                  <Typography className="sliderText_item">
                    <span className="value">29</span><br />
                    <span className="text">contributors</span>
                  </Typography>

                  <Typography className="sliderText_item">
                    <span className="value">12</span><br />
                    <span className="text">days left</span>
                  </Typography>
                </Box>
              </Box>
              <Box className="presentation_bloc">
                <Typography className="title">Presentation</Typography>
                <Box className="presentation_desc">
                  <Box className="inner_desc">
                    <Typography className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Sed do eiusmod. Lorem ipsum dolor sit amet, consectetur.
                    </Typography>
                  </Box>
                  <Typography className="wrap_link">
                    <Link className="more_link">Show more</Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="right_content">
              <Box className="pitch_bloc">
                <Typography className="title">Presentation pitch</Typography>
                <Box className="pitch_content">
                  {/* <Player>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                  </Player> */}
                </Box>
              </Box>
              <Box className="tags_bloc">
                <Typography className="title">Tags</Typography>
                <Box className="tag_list">
                  <Typography className="tag_item" component="span">HTML/CSS</Typography>
                  <Typography className="tag_item" component="span">Angular</Typography>
                  <Typography className="tag_item" component="span">Illustrator</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions className={classes.dialog_footer}>
          <Box className="btns-group">
            <IconButton className="btn btn_validate" onClick={handleClose}>
              <Check />
            </IconButton>
            <IconButton className="btn btn_close" onClick={handleClose}>
              <Cross />
            </IconButton>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CardProject;

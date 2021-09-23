import React from "react";
import { 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions, 
  Checkbox,
  Typography,
  Button,
} from '@material-ui/core';

import useStyles from './style';


// icons
import CheckboxChecked from '../../../Components/Icons/CheckboxChecked';
import CheckboxLine from '../../../Components/Icons/CheckboxLine';

// images
import requestPhoto from '../../../Assets/images/photo_request.png';
import givaudan from '../../../Assets/images/givaudan_logo.png';
import Award from "../../../Components/Icons/Award";

interface ICoaches {
  PhotoCoach: string;
  JobCoach: string;
  NameCoach: string;
  AddressCoach: string;

}


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
      <Card className={classes.CoachesItem}>
        <CardContent className="card_content">
          <Box className="cardMedia_content" >
            <CardMedia className="media" image={requestPhoto} title="image"></CardMedia>
            <Typography className="labeled" component="span" ><img src={givaudan} alt="" /></Typography>
          </Box>
          <Box className="desc_content">
            <Typography className="coach_title" variant="h2">UX Designer</Typography>
            <Typography className="coach_infos">
              <strong>Emma Vatier</strong><span>- Interne - Paris</span>
            </Typography>
            <Typography className="coach_infos_2">
              <span className="level">
                <strong>Level :</strong><span>Senior</span>
              </span>
              <span className="rate">
                <strong>Rate :</strong><span>432 $ / day</span>
              </span>
            </Typography>
          </Box>
          <Box className="check_content">
            <Typography className="top_rated"><Award />Top Rated</Typography>
            <Checkbox 
              inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} 
              className="checkbox"
              icon= {<CheckboxLine fontSize='small' />}
              checkedIcon={<CheckboxChecked fontSize='small'/>}
            />
          </Box>
        </CardContent>
        <CardActions className="card_actions" >
          <Box className="btns-group">
            <Button aria-label="Button" className="btn btn_sendMail">
              <span>Send an email</span>
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardProject;
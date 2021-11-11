import React from 'react';
import { Card, CardActions, CardContent, Box, IconButton, Typography } from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './style';

import Calendar from '../../../Components/Icons/Calendar';
import Check from '../../../Components/Icons/Check';
import Cross from '../../../Components/Icons/Cross';

import Team from '../../../Components/Team/Team';

import ImgAppExterne from '../ImgAppExterne';
import SkillsRecquired from '../SkillsRecquired';


const RequestItem = () => {
  const classes = useStyles();
  
  return (
    <Card className={classNames(classes.requestItem_bloc, "requestItem_bloc")}>
      <CardContent className={classes.cardContentroot} >
        <ImgAppExterne />
        <Box className="header_item" component="header">
          <Typography variant="h2">Lorem Ipsum Sit Amet</Typography>
          <Typography className="date_range"><Calendar /><span>20/03/21 - 20/06/21</span></Typography>
        </Box>
        <Box className="body_item" component="article">
          <Box className="infos_content">
            <Typography className=""><label>Founder :</label><span><strong>Johanna Lorin</strong> - Lorem - Paris</span></Typography>
            <Team />
          </Box>
          <SkillsRecquired />
        </Box>
      </CardContent>
      
      <CardActions className="btns-group" >
        <IconButton aria-label="validate" className="btn btn_validate">
          <Check />
        </IconButton>
        <IconButton aria-label="remove" className="btn btn_remove">
          <Cross />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default RequestItem;

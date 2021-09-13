import React from 'react';
import { Card, CardContent, Box, Typography } from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './style';

import Calendar from '../../../Components/Icons/Calendar';
import Award from '../../../Components/Icons/Award';

import Team from '../../../Components/Team/Team';
import MissionRate from '../MissionRate';
import ImgAppExterne from '../ImgAppExterne';
import SkillsRecquired from '../SkillsRecquired';
import SliderDaysLeft from '../SliderDaysLeft';

const PreviousItem = () => {
  const classes = useStyles();
  
  return (
    <Card className={classNames(classes.appExterneItem_bloc, "appExterneItem_bloc")}>
      <MissionRate />
      <CardContent className={classes.cardContentroot} >
        <ImgAppExterne />
        <Box className="header_item" component="header">
          <Typography variant="h2">Lorem Ipsum Sit Amet</Typography>
          <Typography className="date_range"><Calendar /><span>20/03/21 - 20/06/21</span></Typography>
        </Box>
        <Box className="body_item" component="article">
          <Box className="infos_content">
            <Typography className=""><label>Founder :</label><span><strong>Johanna Lorin </strong> - Lorem - Paris</span></Typography>
            <Team />
          </Box>
          <SkillsRecquired />
          {/* <SliderDaysLeft /> */}
          <Typography className="level_infos"><label>Level acquired : </label><span><Award />TOP RATED</span></Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default (PreviousItem);

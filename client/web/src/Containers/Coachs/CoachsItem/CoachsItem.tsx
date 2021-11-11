import React, { FC } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import classNames from 'classnames';

import UseStyles from './styles';

// icons
import Award from '../../../Components/Icons/Award/Award';

interface ICoachItem {
  coachPhoto: string;
  iconJob?: string;
  jobTitle: string;
  coachName: string;
  coachAddress?: string;
  coachLevel: string;
  coachFee?: number;
  clickAction?: () => void;
}

const CoachsItem: FC<ICoachItem> = (props) => {
  const { coachPhoto, iconJob, jobTitle, coachName, coachAddress, coachLevel, coachFee, clickAction } = props;

  const classes = UseStyles();

  return (
    <Card className={classNames(classes.coachBloc, 'coachBloc')}>
      <CardContent className="coach_content">
        <Box className="coach_wrap">
          <Box className="avatar_content">
            <CardMedia className="avatar_coach" image={coachPhoto} title="coach avatar" />
            <Typography className="icon_job" component="span">
              <img src={iconJob} alt="icon" />
            </Typography>
          </Box>
          <Box className="infos_content">
            <Typography className="title_coach" component="h3">
              {jobTitle}
            </Typography>
            <Typography className="rating_label">
              <Award />
              <span>Top Rated</span>
            </Typography>
            <Typography className="info_coach">
              <strong className="name_coach">{coachName}</strong>
              {coachAddress && <span className="address_coach">{` - ${coachAddress}`}</span>}
            </Typography>
            <Box className="infoJob_coach">
              <Typography className="level_coach">
                <strong>Level : </strong>
                {coachLevel}
              </Typography>
              {coachFee && (
                <Typography className="fees_coach">
                  <strong>Rate : </strong>
                  {coachFee}&nbsp;$ / session
                </Typography>
              )}
            </Box>
          </Box>
          <Box className="btn_wrap">
            <Button color="primary" variant="contained" className="btn_planMeeting" onClick={clickAction}>
              Plan a meeting
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CoachsItem;

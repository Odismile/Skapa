import React from 'react';
import { Avatar, Box, Card, CardContent, CardMedia, Checkbox, Typography } from '@material-ui/core';
import useStyles from './style';
import imgPlace from '../../Assets/images/lab.svg';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Calendar from '../Icons/Calendar';
import { projects_projects } from '../../GraphQL/project/types/projects';

interface CardProjectProps {
  project: projects_projects;
  talentName: string;
}

const CardProject = (props: CardProjectProps) => {
  const classes = useStyles();
  const { project, talentName } = props;
  return (
    <Box>
      <Card className={classes.root}>
        <CardMedia className="media" image={project?.Picture ?? imgPlace} title="image"></CardMedia>
        <CardContent className="contenus">
          <Typography component="p" className="text">
            {project.Name}
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
        <Box className={classes.badge}>{project.Type}</Box>
        <Box className={classes.check}>
          <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="checkbox" />
        </Box>
      </Card>
      <Typography component="p" className={classes.foot}>
        You will have to contribute <span>12 000 TT</span>to contribute with {talentName}
      </Typography>
    </Box>
  );
};

export default CardProject;

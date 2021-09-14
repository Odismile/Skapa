import { useMemo } from 'react';
import { Avatar, Box, Card, CardContent, CardMedia, Checkbox, Typography } from '@material-ui/core';
import useStyles from './style';
import imgPlace from '../../Assets/images/lab.svg';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Calendar from '../Icons/Calendar';
import { projects_projects } from '../../GraphQL/project/types/projects';
import { CallbackFunction } from '../../types/types';
import { getUserFullName } from '../../Utils/utils';
import { useCurrentUser } from '../../Providers/UserProvider/hooks/useCurrentUser';

interface CardProjectProps {
  project: projects_projects;
  talentName: string;
  talentId: string;
  handleAddTalentToProject: CallbackFunction<string>;
  handleRemoveTalentToProject: CallbackFunction<string>;
}

const CardProject = (props: CardProjectProps) => {
  const classes = useStyles();
  const { project, talentName, talentId, handleAddTalentToProject, handleRemoveTalentToProject } = props;
  const { profil } = useCurrentUser();
  const teamMembers = useMemo(() => {
    return (project.teams || []).slice(0, 3);
  }, [project.teams]);

  const teamTalent = useMemo(() => {
    return (project.teams || []).find((i) => i?.profile?.id && i.profile.id === talentId);
  }, [project.teams, talentId]);
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
                {teamMembers.map((talent) => (
                  <Avatar
                    alt={getUserFullName(talent?.profile?.users_id as any)}
                    src={talent?.profile?.picture || '/static/images/avatar/1.jpg'}
                  />
                ))}
                <Avatar
                  alt={getUserFullName(profil?.users_id as any)}
                  src={profil?.picture || '/static/images/avatar/1.jpg'}
                />
              </AvatarGroup>
            </Box>
          </Box>
        </CardContent>
        <Box className={classes.badge}>{project.Type}</Box>
        <Box className={classes.check}>
          <Checkbox
            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
            className="checkbox"
            defaultChecked={Boolean(teamTalent)}
            onChange={(e, checked) => {
              if (checked) {
                handleAddTalentToProject(project.id);
              } else {
                if (teamTalent?.id) handleRemoveTalentToProject(teamTalent?.id);
              }
            }}
          />
        </Box>
      </Card>
      <Typography component="p" className={classes.foot}>
        You will have to contribute <span>12 000 TT</span>to contribute with {talentName}
      </Typography>
    </Box>
  );
};

export default CardProject;

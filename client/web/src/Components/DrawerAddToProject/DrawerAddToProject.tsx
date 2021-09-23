import { FC} from 'react';
import { Box, Button, SwipeableDrawer, Typography } from '@material-ui/core';
import { useCreateTeamProject } from '../../Providers/ProjectProvider/useCreateTeamProject';
import { useDeleteTeamProject } from '../../Providers/ProjectProvider/useDeleteTeamProject';
import { useGetProject } from '../../Providers/ProjectProvider/useGetProject';
import { CallbackVoidFunction } from '../../types/types';
import { getUserId } from '../../Utils/utils';
import CardProject from '../CardProjects/CardProjects';
import useStyles from './style';

interface DrawerAddToProjectProps {
  handleClose: CallbackVoidFunction;
  handleOpen: CallbackVoidFunction;
  talentId: string;
  talentName: string;
  isOpen: boolean;
}

const DrawerAddToProject: FC<DrawerAddToProjectProps> = ({ talentId, handleOpen, handleClose, isOpen, talentName }) => {
  const classes = useStyles();

  // const { isReader, profilId: profilIdLocal, profil } = useCurrentUser();
  const { data: myProjectData } = useGetProject({
    variables: {
      where: { profile: { users_id: +getUserId } },
    },
    fetchPolicy: 'cache-first',
  });
  const [addTalentToProject] = useCreateTeamProject();
  const [removeTalentToProject] = useDeleteTeamProject();
  const onClose = () => {
    if (handleClose) handleClose();
  };
  const onOpen = () => {
    if (handleOpen) handleOpen();
  };
  const handleAddTalentToProject = (projectId: string) => {
    addTalentToProject({
      variables: {
        input: {
          data: {
            project: projectId,
            profile: talentId,
          },
        },
      },
    });
  };
  const handleRemoveTalentToProject = (teamId: string) => {
    removeTalentToProject({
      variables: {
        input: {
          where: {
            id: teamId,
          },
        },
      },
    });
  };
  return (
    <SwipeableDrawer
      className={classes.drawerContribute}
      anchor="bottom"
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      classes={{
        paper: classes.drawerPaperContribute,
      }}
      SwipeAreaProps={{ className: 'backDrop_contribute' }}
    >
      <Box className={classes.addProject_drawerContent}>
        <Box className="header">
          <Button variant="contained" className="btn_handleDrawer" onClick={onClose}></Button>
          <Typography variant="h6">You want to hire {talentName} ?</Typography>
          <Button className="btn_done" onClick={onClose}>
            Done
          </Button>
        </Box>
        <Box className="content">
          <Typography variant="h6" className="selectText">
            Select from your projects
          </Typography>
          {myProjectData?.projects?.map(
            (project) =>
              project && (
                <Box>
                  <CardProject
                    project={project}
                    talentId={talentId}
                    startedAt={project?.Date_start}
                    endAt={project?.Date_end}
                    talentName={talentName}
                    handleAddTalentToProject={handleAddTalentToProject}
                    handleRemoveTalentToProject={handleRemoveTalentToProject}
                  />
                </Box>
              ),
          )}
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};

export default DrawerAddToProject;

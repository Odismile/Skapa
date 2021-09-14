import React, { FC, useState, useEffect } from 'react';
import { Box, Button, Divider, Typography } from '@material-ui/core';
import useStyles from './styles';
import Presentation from '../../../Components/Presentation/Presentation';
import Tags from '../../../Components/Tags/Tags';
import FormerProject from '../../../Components/FormerProjects/FormerProjects';
import Pitch from '../../../Components/Pitch/Pitch';
import CardReview from '../../../Components/CardReview/CardReview';
import { useGetProject } from '../../../Providers/ProjectProvider/useGetProject';
import Skeleton from 'react-loading-skeleton';
import { useTranslation } from 'react-i18next';
import ContributeDrawer from '../../ProjectContent/ContributeDrawer';
import { projects_all_projects } from '../../../GraphQL/project/types/projects_all';

interface FicheProjectProps {
  projectId: string;
  profilId: string;
}

const FicheProject: FC<FicheProjectProps> = ({ projectId, profilId }) => {
  const { t } = useTranslation();
  const { data, loading } = useGetProject({
    variables: { where: { id: projectId } },
  });
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [project, setProject] = useState<projects_all_projects | null>(null);

  useEffect(() => {
    if (data?.projects?.length) setProject(data?.projects[0]);
  }, [data?.projects]);
  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Box className={classes.root}>
        <Box className="card-review">
          {loading && <Skeleton count={1} height={170} />}
          {!loading && (
            <CardReview
              projectId={projectId}
              profilId={profilId}
              imgCardUrl={project?.Picture ?? ''}
              name={project?.Name ?? ''}
              user={project?.profile?.users_id}
              type={project?.Type ?? ''}
              projectInfo={project}
            />
          )}
        </Box>
        {project?.Video?.length && (
          <Box className="pitch">
            <Pitch url={project?.Video} />
          </Box>
        )}
        <Box className="presentation">
          <Typography variant="h6" className="title">
            {t(`ficheProject.Presentation`)}
          </Typography>
          <Presentation description={project?.description ?? ''} />
        </Box>
        {(project?.project_skills?.length || 0) > 0 && (
          <Box className="tags">
            <Typography variant="h6" className="title">
              {t(`ficheProject.Tags`)}
            </Typography>
            <Tags project_skills={project?.project_skills} />
          </Box>
        )}
        <Box className="btn">
          <Button className="btn-contibute" onClick={handleDrawer}>
            Contribute
          </Button>
        </Box>
        <Divider className="divider" />
        <Box className="similarProjects">
          <Typography variant="h6" className="title">
            {t(`ficheProject.similarProject`)}
          </Typography>
          <FormerProject />
        </Box>
      </Box>
      <ContributeDrawer project={project} setProject={setProject} setOpen={setOpen} open={open} />
    </>
  );
};

export default FicheProject;

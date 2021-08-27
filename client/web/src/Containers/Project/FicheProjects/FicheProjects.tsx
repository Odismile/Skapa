import React, { FC } from 'react';
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

interface FicheProjectProps {
  projectId: string;
  profilId: string;
}

const FicheProject: FC<FicheProjectProps> = ({ projectId, profilId }) => {
  const { t } = useTranslation();
  const { data, loading } = useGetProject(projectId);
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box className="card-review">
          {loading && <Skeleton count={1} height={170} />}
          {!loading && (
            <CardReview
              projectId={projectId}
              profilId={profilId}
              imgCardUrl={data?.projects?.[0]?.Picture ?? ''}
              name={data?.projects?.[0]?.Name ?? ''}
              user={data?.projects?.[0]?.profile?.users_id}
              type={data?.projects?.[0]?.Type ?? ''}
              projectInfo={data?.projects?.[0]}
            />
          )}
        </Box>
        <Box className="pitch">
          <Pitch url={data?.projects?.[0]?.Video ?? ''} />
        </Box>
        <Box className="presentation">
          <Typography variant="h6" className="title">
            {t(`ficheProject.Presentation`)}
          </Typography>
          <Presentation description={data?.projects?.[0]?.description ?? ''} />
        </Box>
        <Box className="tags">
          <Typography variant="h6" className="title">
          {t(`ficheProject.Tags`)}
          </Typography>
          <Tags project_skills={data?.projects?.[0]?.project_skills} />
          <Box className="btn">
            <Button className="btn-contibute">Contribute</Button>
          </Box>
        </Box>
        <Divider className="divider" />
        <Box className="similarProjects">
          <Typography variant="h6" className="title">
          {t(`ficheProject.similarProject`)}
          </Typography>
          <FormerProject />
        </Box>
      </Box>
    </>
  );
};

export default FicheProject;

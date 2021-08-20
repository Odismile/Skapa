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

interface FicheProjectProps {
  projectId: string;
  profilId: string;
}

const FicheProject: FC<FicheProjectProps> = ({ projectId, profilId }) => {
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
            />
          )}
        </Box>
        <Box className="pitch">
          <Pitch url={data?.projects?.[0]?.Video ?? ''} />
        </Box>
        <Box className="presentation">
          <Typography variant="h6" className="title">
            Présentation
          </Typography>
          <Presentation data={data} />
        </Box>
        <Box className="tags">
          <Typography variant="h6" className="title">
            Tags
          </Typography>
          <Tags data={data} />
          <Box className="btn">
            <Button className="btn-contibute">Contribute</Button>
          </Box>
        </Box>
        <Divider className="divider" />
        <Box className="similarProjects">
          <Typography variant="h6" className="title">
            Similar projects
          </Typography>
          <FormerProject />
        </Box>
      </Box>
    </>
  );
};

export default FicheProject;

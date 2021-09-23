import { Box, Typography } from '@material-ui/core';
import React from 'react';
import CardReview from '../../../../Components/CardReview/CardReview';
import Pitch from '../../../../Components/Pitch/Pitch';
import Place from '../../../../Components/Place/Place';
import Presentation from '../../../../Components/Presentation/Presentation';
import Tags from '../../../../Components/Tags/Tags';
import { useGetProject } from '../../../../Providers/ProjectProvider/useGetProject';
import { projectIdVariable } from '../../../../ReactiveVariable/Project/createProject';
import useStyles from './styles';
//import { useTranslation } from 'react-i18next';

const Review = () => {
  const classes = useStyles();
  //const { t } = useTranslation();

  const { data } = useGetProject({
    variables: { where: { id: projectIdVariable() } },
  });

  return (
    <Box className={classes.review_bloc}>
      <CardReview
        imgCardUrl={data?.projects?.[0]?.Picture ?? ''}
        name={data?.projects?.[0]?.Name ?? ''}
        user={data?.projects?.[0]?.profile?.users_id}
        type={data?.projects?.[0]?.Type ?? ''}
        projectInfo={data?.projects?.[0]}
      />
      {data?.projects?.[0]?.Video && <Pitch url={data?.projects?.[0]?.Video} />}
      <Typography variant="h6" className="titre">
        {/* {t(`createProject.Presentation`)} */}
        Presentation
      </Typography>
      <Presentation description={data?.projects?.[0]?.description ?? ''} />
      <Typography variant="h6" className="titre">
        {/* {t(`createProject.Tags`)} */}
        Tags
      </Typography>
      <Tags project_skills={data?.projects?.[0]?.project_skills} />
      <Typography variant="h6" className="titre">
        Place
        {/* {t(`createProject.Place`)} */}
      </Typography>
      <Place data={data} />
    </Box>
  );
};

export default Review;

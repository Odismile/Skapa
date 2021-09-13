import { useQuery } from '@apollo/client';
import { Box, Button, Chip, Divider, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import FormerProject from '../../../Components/FormerProjects/FormerProjects';
import Pitch from '../../../Components/Pitch/Pitch';
import Presentation from '../../../Components/Presentation/Presentation';
import SimpleCardTalents from '../../../Components/SimpleCardTalents/SimpleCardTalents';
import { PROFILE } from '../../../GraphQL/Profile/query';
import { profile, profileVariables } from '../../../GraphQL/Profile/types/profile';
import useStyles from './styles';

interface FicheTalentsProps {
  talentId: string;
}

const FicheTalents: FC<FicheTalentsProps> = ({ talentId }) => {
  const { data } = useQuery<profile, profileVariables>(PROFILE, { variables: { id: talentId } });

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className="profile">
        <SimpleCardTalents
          imgCard={data?.profile?.picture ?? ''}
          position={data?.profile?.position ?? ''}
          name={data?.profile?.users_id?.lastname ?? ''}
          jobSeniority={data?.profile?.job_seniority_id?.label ?? ''}
        />
      </Box>
      <Box className="bio">
        <Typography variant="h6" className="title">
          {data?.profile?.bio}
        </Typography>
        <Presentation description={''} />
      </Box>
      <Box className="skills">
        <Typography variant="h6" className="title">
          Skills
        </Typography>
        {data?.profile?.profile_skills?.map((skill, index) => {
          return (
            <Box className={classes.content}>
              <Box className={classes.tags}>
                <Chip key={index} label={skill?.skill_id?.label ?? ''} />
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box className="former-project">
        <Typography variant="h6" className="title">
          Former projects
        </Typography>
        <FormerProject />
      </Box>
      {}
      <Box className="pitch">
        <Pitch url={data?.profile?.video ?? ''} />
      </Box>
      <Box className="boxBtn">
        <Button className="btnAdd">Add to Project</Button>
      </Box>
      <Divider />
      <Typography className="textSuggest">
        You like Emma ? <br></br>You will like :
      </Typography>
      <SimpleCardTalents />
    </Box>
  );
};

export default FicheTalents;

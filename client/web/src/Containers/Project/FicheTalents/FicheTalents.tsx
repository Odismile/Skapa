import React, { FC } from 'react';
import { Box, Button, Chip, Divider, Typography } from '@material-ui/core';
import useStyles from './styles';
import SimpleCardTalents from '../../../Components/SimpleCardTalents/SimpleCardTalents';
import Presentation from '../../../Components/Presentation/Presentation';
import Tags from '../../../Components/Tags/Tags';
import FormerProject from '../../../Components/FormerProjects/FormerProjects';
import Pitch from '../../../Components/Pitch/Pitch';
import { useQuery } from '@apollo/client';
import { profiles, profilesVariables } from '../../../GraphQL/Profile/types/profiles';
import { PROFILES } from '../../../GraphQL/Profile/query';

interface FicheTalentsProps {
  talentId: string;
}

const FicheTalents: FC<FicheTalentsProps> = ({ talentId }) => {
  const { data } = useQuery<profiles, profilesVariables>(PROFILES, { variables: { where: { id: talentId } } });

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className="profile">
        <SimpleCardTalents
          imgCard={data?.profiles?.[0]?.picture ?? ''}
          position={data?.profiles?.[0]?.position ?? ''}
          name={data?.profiles?.[0]?.users_id?.lastname ?? ''}
          jobSeniority={data?.profiles?.[0]?.job_seniority_id?.label ?? ''}
        />
      </Box>
      <Box className="bio">
        <Typography variant="h6" className="title">
          {data?.profiles?.[0]?.bio}
        </Typography>
        <Presentation description={''} />
      </Box>
      <Box className="skills">
        <Typography variant="h6" className="title">
          Skills
        </Typography>
        {data?.profiles?.[0]?.profile_skills?.map((skill, index) => {
          return (
            <Box className={classes.content}>
              <Box className={classes.tags}>
                <Chip key={index} label={skill?.skill_id?.label ?? ''} />
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box>
        <Typography variant="h6" className="title">
          Former projects
        </Typography>
        <FormerProject />
      </Box>
      <Box>
        <Pitch url={data?.profiles?.[0]?.video ?? ''} />
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

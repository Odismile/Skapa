import { useQuery } from '@apollo/client';
import { Box, Button, Chip, Divider, Typography } from '@material-ui/core';
import React, { FC, useState } from 'react';
import DrawerAddToProject from '../../../Components/DrawerAddToProject/DrawerAddToProject';
import Pitch from '../../../Components/Pitch/Pitch';
import Presentation from '../../../Components/Presentation/Presentation';
import SimpleCardTalents from '../../../Components/SimpleCardTalents/SimpleCardTalents';
import { PROFILE } from '../../../GraphQL/Profile/query';
import { profile, profileVariables } from '../../../GraphQL/Profile/types/profile';
import { getUserFullName } from '../../../Utils/utils';
import useStyles from './styles';

interface FicheTalentsProps {
  talentId: string;
}

const FicheTalents: FC<FicheTalentsProps> = ({ talentId }) => {
  const { data } = useQuery<profile, profileVariables>(PROFILE, { variables: { id: talentId } });

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className="profile">
        <SimpleCardTalents
          imgCard={data?.profile?.picture ?? ''}
          position={data?.profile?.position ?? ''}
          name={getUserFullName(data?.profile?.users_id as any)}
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
        <Box className={classes.content}>
          {data?.profile?.profile_skills?.map((skill, index) => {
            return (
              <Box className={classes.tags}>
                <Chip key={index} label={skill?.skill_id?.label ?? ''} />
              </Box>
            );
          })}
        </Box>
      </Box>
      {/* <Box className="former-project">
        <Typography variant="h6" className="title">
          Former projects
        </Typography>
        <FormerProject />
      </Box> */}
      {data?.profile?.video && (
        <Box className="pitch">
          <Pitch url={data?.profile?.video ?? ''} />
        </Box>
      )}
      <Box className="boxBtn">
        <Button className="btnAdd" onClick={handleOpen}>
          Add to Project
        </Button>
      </Box>
      <Divider />
      <Typography className="textSuggest">
        You like Emma ? <br></br>You will like :
      </Typography>
      <SimpleCardTalents />
      {talentId && (
        <DrawerAddToProject
          talentId={talentId}
          talentName={getUserFullName(data?.profile?.users_id as any) ?? ''}
          isOpen={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      )}
    </Box>
  );
};

export default FicheTalents;

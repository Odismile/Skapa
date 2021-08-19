import React from 'react';
import { Box } from '@material-ui/core';
import PrimaryHeader from '../../Components/Header';
import useStyles from './styles';
import UserActivityList from '../../Components/MyActivity/UserActivityList/UserActivityList';
import UserContributorList from '../../Components/MyActivity/UserContributorList/UserContributorList';
import UserTalentList from '../../Components/MyActivity/UserTalentList/UserTalentList';
import UserCreatorList from '../../Components/MyActivity/UserCreatorList/UserCreatorList';
import CardContributor from '../../Components/MyActivity/CardContributor/CardContributor';
import CardTalentOngoing from '../../Components/MyActivity/CardTalentOngoing/CardTalentOngoing';
import CardTalentFinished from '../../Components/MyActivity/CardTalentFinished/CardTalentFinished';
import CardCreatorFinished from '../../Components/MyActivity/CardCreatorFinished/CardCreatorFinished';

const MyActivity = () => {
  const classes = useStyles();
  return (
    <Box>
      <PrimaryHeader />
      <Box className={classes.box}>
        <UserActivityList />
        <br></br>
        <UserContributorList />
        <br></br>
        <UserTalentList />
        <br></br>
        <UserCreatorList />
        <br></br>
        <CardContributor/>
        <br></br>
        <CardTalentOngoing/>
        <br></br>
        <CardTalentFinished/>
        <br></br>
        <CardCreatorFinished/>
      </Box>
    </Box>
  );
};

export default MyActivity;

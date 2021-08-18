import React from 'react';
import { Box } from "@material-ui/core";
import PrimaryHeader from "../../Components/Header";
import useStyles from "./styles";
import UserActivityList from '../../Components/MyActivity/UserActivityList/UserActivityList';
import UserContributorList from '../../Components/MyActivity/UserContributorList/UserContributorList';
import UserTalentList from '../../Components/MyActivity/UserTalentList/UserTalentList';
import UserCreatorList from '../../Components/MyActivity/UserCreatorList/UserCreatorList';

const MyActicity = () =>{
    const classes = useStyles();
    return(
        <Box>
            <PrimaryHeader/>
            <UserActivityList/>
            <br></br>
            <UserContributorList/>
            <br></br>
            <UserTalentList/>
            <br></br>
            <UserCreatorList/>
        </Box>
    )
}

export default MyActicity;
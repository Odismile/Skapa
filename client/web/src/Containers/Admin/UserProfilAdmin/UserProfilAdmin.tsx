import React, { FC }from "react";
import { Box, Avatar, Typography } from '@material-ui/core';
import classNames from 'classnames';


import useStyles from './styles';

interface IuserProfil {
  photoAvatar: string;
  userName: string;
  userJob : string;
}

const  UserProfilAdmin: FC<IuserProfil> = (props) => {
  const { photoAvatar, userName, userJob } = props;
  const classes = useStyles();

  return (
    
    <Box className={ classNames(classes.userProfil, "userProfil") } >
      <Avatar alt="User avatar" src={photoAvatar} className="user_avatar" />
        <Box className="user_infos">
          <Typography className="user_name">{userName}</Typography>
          <Typography className="user_job">{userJob}</Typography>
        </Box>
    </Box>
  );
};

export default UserProfilAdmin;

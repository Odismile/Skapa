import React from 'react';
import { Avatar, Box, Typography} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import classNames from 'classnames';
import useStyles from './style';

import UserAvatar from '../../Assets/images/user_avatar.jpg';

const Team = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.team_bloc}>
      <Typography className="team_title">Team</Typography>
      <AvatarGroup max={3} className={classes.avatarList}>
        <Avatar className={classes.avatarItem} alt="User 1" src={UserAvatar} />
        <Avatar alt="User 2" src={UserAvatar} />
        <Avatar alt="User 3" src={UserAvatar} />
        <Avatar alt="User 4" src={UserAvatar} />
        <Avatar alt="User 5" src={UserAvatar} />
      </AvatarGroup>
    </Box>
  );
};

export default Team;

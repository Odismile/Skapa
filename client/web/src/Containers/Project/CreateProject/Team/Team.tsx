import React  from 'react';
import { Box, Link, Typography } from "@material-ui/core";
import useStyles from "./styles";
import CardTalents from '../../../../Components/CardTalents/CardTalents';


const Team = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.teamBloc}>
      <Box className="team-item">
        <Box className="team-item-top">
          <Typography component="h2">
            Selected profiles
          </Typography>
          <Typography component="span" className="price">
            14 000 $
          </Typography>
        </Box>
        <Box className="cardtalent-item">
          <CardTalents />
        </Box>
        <Box className="cardtalent-item">
          <CardTalents />
        </Box>
        <Box className='link'>
          <Link href='#'>Remove selected profile</Link>
        </Box>
        
      </Box>
      <Box className="team-item">
        <Box className="team-item-top">
          <Typography component="h2">
            Add from recommandations
          </Typography>
        </Box>
        <Box className="cardtalent-item">
          <CardTalents />
        </Box>
        <Box className="cardtalent-item">
          <CardTalents />
        </Box>
        <Box className='link'>
          <Link href='#'>Add selected profile</Link>
        </Box>
      </Box>
      <Box className="team-item">
        <Box className="team-item-top">
          <Typography component="h2">
            Add from favorites
          </Typography>
        </Box>
        <Box className="cardtalent-item">
          <CardTalents />
        </Box>
        <Box className="cardtalent-item">
          <CardTalents />
        </Box>
        <Box className='link'>
          <Link href='#'>Add selected profile</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;

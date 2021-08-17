import React from 'react';
import { Box, Button, Card, CardContent, Checkbox, Chip, IconButton, Typography } from '@material-ui/core';
import useStyles from './style';
import photoCard from '../../Assets/images/photo-card.png';
import organisationImg from '../../Assets/images/organisation.png';
import HeartLine from '../Icons/HeartLine';
import Rate from '../Icons/Rate';
import Award from '../Icons/Award';

const SimpleCardTalents = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent className="content">
          <Box className="head">
            <img src={photoCard} alt="photo" />
            <Box>
              <Box component="h6" className="head-title" textOverflow="ellipsis">
                UX Designer
              </Box>
              <Typography component="p" className="note top-rated">
                <Award /> TOP RATED
              </Typography>
              <Typography component="p" className="name-adress">
                <span>Baptiste Artaud</span> - Interne - Paris
              </Typography>
              <Box className="level-rate">
                <Typography component="p" className="name-adress">
                  <span>Level : </span>Junior
                </Typography>
                <Typography component="p" className="name-adress">
                  <span>Rate : </span>318 $ / day
                </Typography>
              </Box>
              
            </Box>

            <img src={organisationImg} className="iconOrganisation" alt="organisation" />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default SimpleCardTalents;

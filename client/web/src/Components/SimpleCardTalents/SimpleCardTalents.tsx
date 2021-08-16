import React from 'react';
import { Box, Button, Card, CardContent, Checkbox, Chip, IconButton, Typography } from '@material-ui/core';
import useStyles from './style';
import photoCard from '../../Assets/images/photo-card.png';
import organisationImg from '../../Assets/images/organisation.png';
import HeartLine from '../Icons/HeartLine';
import Rate from '../Icons/Rate';

const SimpleCardTalents = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent className="content">
          <Box className="head">
            <img src={photoCard} alt="photo" />
            <Box>
              <Typography component="h6" variant="h6">
                UX Designer
              </Typography>
              <Typography component="p" className="note top-rated">
                TOP RATED
              </Typography>
              <Typography component="p" className="name-adress">
                <span>Baptiste Artaud</span> - Interne - Paris
              </Typography>
              <Typography component="p" className="name-adress">
                <span>Level : </span>Junior <span>Rate : </span>318 $ / day
              </Typography>
            </Box>

            <img src={organisationImg} className="iconOrganisation" alt="organisation" />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default SimpleCardTalents;

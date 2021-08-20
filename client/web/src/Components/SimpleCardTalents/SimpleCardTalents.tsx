import { Box, Card, CardContent, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import organisationImg from '../../Assets/images/organisation.png';
import Award from '../Icons/Award';
import useStyles from './style';

interface SimpleCardTalentsProps {
  imgCard?: string;
  position?: string;
  name?: string;
  jobSeniority?: string;
}

const SimpleCardTalents: FC<SimpleCardTalentsProps> = ({ position, name, jobSeniority, imgCard }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent className="content">
          <Box className="head">
            <img src={imgCard} alt="photo" />
            <Box>
              <Box component="h6" className="head-title" textOverflow="ellipsis">
                {position}
              </Box>
              <Typography component="p" className="note top-rated">
                <Award /> TOP RATED
              </Typography>
              <Typography component="p" className="name-adress">
                <span>{name}</span> - Interne - Paris
              </Typography>
              <Box className="level-rate">
                <Typography component="p" className="name-adress">
                  <span>Level : </span>
                  {jobSeniority}
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

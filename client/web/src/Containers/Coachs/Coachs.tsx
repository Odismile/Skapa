import React from 'react';
import {
  Box,
  List, 
  ListItem,
  TextField,
  Typography,
} from '@material-ui/core';
import PrimaryHeader from '../../Components/Header/Header';
import DailyRate from '../../Components/DailyRate/DailyRate';
import Filter from '../../Components/Icons/Filter';
import Search from '../../Components/Icons/Search';


import useStyles from './styles';
import CoachsItem from './CoachsItem/CoachsItem';
import SearchFilterTalents from '../../Components/SearchFilterTalents/SearchFilterTalents';

// icons 
import Award from '../../Components/Icons/Award/Award';


// images
import coachPhoto from '../../Assets/images/coach_avatar.png';
import DesignThinkerPicto from '../../Assets/images/thinker_picto.png';

const Coachs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainPage}>
      <PrimaryHeader />
      <Box className="wrapPage">
        <SearchFilterTalents />
        {/* List coachs */}
          <Box className={classes.list_coachs}>
            <Box className="item_bloc">
              <Typography className="titre_item" component="h2">Design Thinking Process</Typography>
              <Box className="item_list">
                <CoachsItem 
                  coachPhoto={coachPhoto} 
                  iconJob={DesignThinkerPicto}  
                  jobTitle="Design Thinker"
                  coachName="Louis Tomaso"
                  coachAddress="Paris"
                  coachLevel="Senior"
                  coachFee= {500}
                />
                <CoachsItem 
                  coachPhoto={coachPhoto} 
                  iconJob={DesignThinkerPicto}  
                  jobTitle="Design Thinker"
                  coachName="Louis Tomaso"
                  coachAddress="Paris"
                  coachLevel="Senior"
                  coachFee= {500}
                />
              </Box>
            </Box>

            <Box className="item_bloc">
              <Typography className="titre_item" component="h2">Design to Change Process</Typography>
              <Box className="item_list">
                <CoachsItem 
                  coachPhoto={coachPhoto} 
                  iconJob={DesignThinkerPicto}  
                  jobTitle="Design Thinker"
                  coachName="Louis Tomaso"
                  coachAddress="Paris"
                  coachLevel="Senior"
                  coachFee= {500}
                />
                <CoachsItem 
                  coachPhoto={coachPhoto} 
                  iconJob={DesignThinkerPicto}  
                  jobTitle="Design Thinker"
                  coachName="Louis Tomaso"
                  coachAddress="Paris"
                  coachLevel="Senior"
                  coachFee= {500}
                />
              </Box>
            </Box>

            <Box className="item_bloc">
              <Typography className="titre_item" component="h2">Digitalization Process</Typography>
              <Box className="item_list">
                <CoachsItem 
                  coachPhoto={coachPhoto} 
                  iconJob={DesignThinkerPicto}  
                  jobTitle="Design Thinker"
                  coachName="Louis Tomaso"
                  coachAddress="Paris"
                  coachLevel="Senior"
                  coachFee= {500}
                />
              </Box>
            </Box>
            <Box className="item_bloc">
              <Typography className="titre_item" component="h2">UX Process</Typography>
              <Box className="item_list">
                <CoachsItem 
                  coachPhoto={coachPhoto} 
                  iconJob={DesignThinkerPicto}  
                  jobTitle="Design Thinker"
                  coachName="Louis Tomaso"
                  coachAddress="Paris"
                  coachLevel="Senior"
                  coachFee= {500}
                />
              </Box>
            </Box>
            
          </Box>
      </Box>
    </Box>
  );
};

export default Coachs;

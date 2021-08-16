import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  IconButton,
  SwipeableDrawer,
  Typography,
} from '@material-ui/core';
import useStyles from './style';
import photoCard from '../../Assets/images/photo-card.png';
import organisationImg from '../../Assets/images/organisation.png';
import HeartLine from '../Icons/HeartLine';
import Rate from '../Icons/Rate';
import CardProject from '../CardProjects/CardProjects';

const CardTalents = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Card className={classes.root}>
      <CardContent className="content">
        <Box className="head">
          <img src={photoCard} alt="photo" />
          <Box>
            <Typography component="h6" variant="h6">
              UX Designer
            </Typography>
            {/* recommended */}
            <Typography component="p" className="note recommanded">
              <Rate /> RECOMMANDED
            </Typography>
            {/* top rated */}
            {/* <Typography component="p" className="note top-rated">
               <Rate /> TOP RATED
              </Typography> */}
            <Typography component="p" className="name-adress">
              <span>Baptiste Artaud</span> - Interne - Paris
            </Typography>
            <Typography component="p" className="name-adress">
              <span>Level : </span>Junior <span>Rate : </span>318 $ / day
            </Typography>
          </Box>
          <IconButton className="btn btn-favori">
            <HeartLine color="primary" className="iconHeart" />
          </IconButton>

          <img src={organisationImg} className="iconOrganisation" alt="organisation" />
        </Box>
        <Box className="foot">
          <Box className="tags">
            <Chip label="Sketch" />
            <Chip label="Figma" />
            <span className="number">+13</span>
          </Box>
          {/* si bouton */}
          <Button className="btnAdd" onClick={handleDrawer}>
            Add to a project
          </Button>
          <SwipeableDrawer
            className={classes.drawerContribute}
            anchor="bottom"
            open={open}
            onClose={handleDrawer}
            onOpen={handleDrawer}
            classes={{
              paper: classes.drawerPaperContribute,
            }}
            SwipeAreaProps={{ className: 'backDrop_contribute' }}
          >
            <Box className={classes.addProject_drawerContent}>
              <Box className="header">
                <Button variant="contained" className="btn_handleDrawer" onClick={handleDrawer} ></Button>
                <Typography variant="h6">You want to hire Emma ?</Typography>
                <Button className='btn_done'>Done</Button>
              </Box>
              <Box className="content">
                <Typography variant="h6" className="selectText">
                  Select from your projects
                </Typography>
                <Box>
                  <CardProject />
                </Box>
                <Box>
                  <CardProject />
                </Box>
              </Box>
            </Box>
          </SwipeableDrawer>
          {/* Si checkbox */}
          {/* <Box className={classes.check}>
              <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="checkbox"/>
            </Box> */}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardTalents;

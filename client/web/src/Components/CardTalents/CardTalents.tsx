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
import Heart from '../Icons/Heart';
import Award from '../Icons/Award';
import CardProject from '../CardProjects/CardProjects';
import { useHistory } from 'react-router-dom';
import HeartLine from '../Icons/HeartLine';

const CardTalents = () => {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawer = (event:any) => {
    setOpen((prev) => !prev);
    event.stopPropagation();
  };

  const goToDetailsTalents = (event:any) =>{
    history.push('/details-talents');
    event.stopPropagation();
  }

  const handleClick = (event:any) =>{
    event.stopPropagation();
  }

  return (
    <Card className={classes.root} onClick={goToDetailsTalents}>
      <CardContent className="content">
        <Box className="head">
          <img src={photoCard} alt="photo" />
          <Box>
            <Box component="h6" className="head-title">
              UX Designer
            </Box>
            {/* recommended */}
            <Typography component="p" className="note recommanded">
              <Award /> RECOMMANDED
            </Typography>
            {/* top rated */}
            {/* <Typography component="p" className="note top-rated">
               <Award /> TOP RATED
              </Typography> */}
            <Typography component="p" className="name-adress">
              <span>Baptiste Artaud</span> - Interne - Paris
            </Typography>
            <Typography component="p" className="name-adress">
              <span>Level : </span>Junior <span>Rate : </span>318 $ / day
            </Typography>
          </Box>
          <IconButton className="btn btn-favori" onClick={handleClick}>
            <HeartLine className="iconHeart" />
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
                <Button className='btn_done' onClick={handleDrawer}>Done</Button>
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

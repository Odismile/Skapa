import React from 'react';
import { Box, Button, Card, CardMedia, Drawer, IconButton, List, ListItem, SwipeableDrawer, Typography } from '@material-ui/core';
import CardReview from '../../Components/CardReview/CardReview';
import FormerProject from '../../Components/FormerProjects/FormerProjects';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import TextFieldComponent from '../../Components/TextField/TextField';
import useStyles from './styles';

// img
import imgCard from '../../Assets/images/lab.svg';
import photoUser from '../../Assets/images/photo-card.png';
import Heart from '../../Components/Icons/Heart';

const ProjectContent = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(prev => !prev);
  };

  const handleClick = (event:any) =>{
    event.stopPropagation();
  }

  return (
    <Box className={classes.projectPage}>
      <SearchFilter />
      <Box className={classes.content}>
        <CardReview />
        <Box className='btnContribute'>
          <Button onClick={handleDrawer}>Contribute</Button>
        </Box>
      </Box>
      <Box className={classes.content}>
        <CardReview />
        <Box className='btnContribute'>
          <Button onClick={handleDrawer}>Contribute</Button>
        </Box>
      </Box>

      <SwipeableDrawer
        className={classes.drawerContribute}
        anchor="bottom"
        open={open}
        onClose={handleDrawer}
        onOpen={handleDrawer}
        classes={{
          paper: classes.drawerPaperContribute,
        }}
        SwipeAreaProps={
          {className:'backDrop_contribute'}
        }
      >
        <Box className={classes.contribute_drawerContent}>
          <Box className="header_content" component="header">
            <Button variant="contained" className="btn_handleDrawer" onClick={handleDrawer} ></Button>
            <Typography className="title_text" variant="h2">I contribute to thefollowing project </Typography>
            <Button color="primary" variant="contained" href="" className="btn_done" >Done</Button>
          </Box>
          <Box className="body_content" component="section">
            <form className="formContribute" id="formContribute">
              <Card className="contribute_media" elevation={0} >
                <CardMedia className="contribute_picture" image={imgCard} title="image" />
                <Box className='category' component="span">LAB</Box>
                <IconButton className="btn-favori" onClick={handleClick}>
                  <Heart className="iconHeart" />
                </IconButton>
              </Card>
              <Typography className="subtitle_text" variant="h3">Kit de composants Miro customisables   </Typography>
              <Typography className="text">What amount would you wish to give to support this project ?</Typography>
              <Box className="field_item amount_item">
                <TextFieldComponent
                  label=""
                  id="amountValue"
                  type="text"
                  name=""
                  value= "0000 $"
                />
              </Box>
              <Typography className="text_status">You have <span className="amount_value">12 000 $</span>in your wallet</Typography>
              
              <List className="list_relativeuser">
                <ListItem disableGutters={true}>
                  <figure className="user_avatar">
                    <img src={photoUser} alt="user_photo" />
                  </figure>
                  <Box className="user_infos">
                    <Typography>Your average contribution is :  5 690 $</Typography>
                  </Box>
                </ListItem>
                <ListItem disableGutters={true}>
                  <figure className="user_avatar">
                    <img src={photoUser} alt="user_photo" />
                  </figure>
                  <Box className="user_infos">
                    <Typography>Your average contribution is :  5 690 $</Typography>
                  </Box>
                </ListItem>
              </List>
              <Button color="primary" variant="contained" href="" className="btn_contribute" >Contribute</Button>
            </form>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default ProjectContent;

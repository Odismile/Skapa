import { Box, Button, Card, CardContent, Checkbox, Chip, IconButton, Typography } from '@material-ui/core';
import useStyles from './style';
import photoCard from '../../Assets/images/photo-card.png';
import organisationImg from '../../Assets/images/organisation.png';
import HeartLine from '../Icons/HeartLine';
import Rate from '../Icons/Rate';

const CardTalents = () => {
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
              <HeartLine color="primary" className='iconHeart'/>
            </IconButton>
            
            <img src={organisationImg} className='iconOrganisation' alt="organisation"/>
          </Box>
          <Box className="foot">
              <Box className='tags'>
                <Chip label="Sketch" />
                <Chip label="Figma" />
                <span className='number'>+13</span>
              </Box>
            {/* si bouton */}
            <Button className="btnAdd">Add to a project</Button>
            {/* Si checkbox */}
            {/* <Box className={classes.check}>
              <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="checkbox"/>
            </Box> */}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default CardTalents;

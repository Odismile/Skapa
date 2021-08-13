import { Box, Button, Card, CardContent, Chip, Typography } from '@material-ui/core';
import useStyles from './style';
import photoCard from '../../Assets/images/photo-card.png';
import HeartLine from '../Icons/HeartLine';

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
              <Typography component="p" className="note">
                RECOMMANDED
              </Typography>
              <Typography component="p" className="name-adress">
                <span>Baptiste Artaud</span> - Interne - Paris
              </Typography>
              <Typography component="p" className="name-adress">
                <span>Level : </span>Junior <span>Rate : </span>318 $ / day
              </Typography>
            </Box>
            <HeartLine color="primary" className='iconHeart'/>
          </Box>
          <Box className="foot">
              <Box className='tags'>
                <Chip label="Sketch" />
                <Chip label="Figma" />
                <span className='number'>+13</span>
              </Box>
            <Button className="btnAdd">Add to a project</Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default CardTalents;

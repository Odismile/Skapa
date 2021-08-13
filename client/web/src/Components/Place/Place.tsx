import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyles from './style';
import imgPlace from '../../Assets/images/lab.svg';

const Place = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography variant='h6' className="title">Place</Typography>
      <Card className={classes.root}>
        <CardMedia className='media' image={imgPlace} title="image" />
        <CardContent className='content'>
          <Box className='name-money'>
            <Typography className="title" component="p">
              WeWork Lafayette
            </Typography>
            <Box className='chips'>
              870 $/ day
            </Box>
          </Box>
          <Typography component="p" className="location">
              <span>Location :</span> 238 rue Lafayette, 75009 <br></br> Bâtiment WeWork - 3e étage - salle Rousseau
            </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Place;

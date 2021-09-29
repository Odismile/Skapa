import React, { FC } from "react";
import { 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions, 
  Checkbox,
  Typography,
  Button,
} from '@material-ui/core';
import classNames from "classnames";
import useStyles from './style';


// icons
import CheckboxChecked from '../../../../Components/Icons/CheckboxChecked';
import CheckboxLine from '../../../../Components/Icons/CheckboxLine';
//import CheckboxChecked from '../../../Components/Icons/CheckboxChecked';

// images
//import requestPhoto from '../../../Assets/images/photo_request.png';
//import givaudan from '../../../Assets/images/givaudan_logo.png';
import Award from "../../../../Components/Icons/Award";
import Wifi from "../../../../Components/Icons/Wifi";
import Computer from "../../../../Components/Icons/Computer";
import Cast from "../../../../Components/Icons/Cast";
import Photo from "../../../../Components/Icons/Photo";

interface ICoaches {
  PhotoPlace: string;
  LabeledPlace: string;
  NamePlace: string;
  PricePlace: number;
  TopRated?: any;
  AdressPlace : string;
  CapacityPlace : number;
  selectedCard?: '' | 'selected';
}

const CardProject: FC<ICoaches> = (props) => {
  const classes = useStyles();
  const {
    PhotoPlace,
    LabeledPlace,
    NamePlace,
    PricePlace,
    TopRated = "<Typography className='top_rated'><Award />Top Rated</Typography>",
    AdressPlace,
    CapacityPlace,
    selectedCard = '',
  } = props;

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const handleClickOpen = (scrollType : any) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classNames(classes.carcPlacesContainer, {selectedCard})}>
      <Card className={classNames(classes.PlacesItem, "placeItem")}>
        <CardContent className="card_content">
          <Box className="cardMedia_content" >
            <CardMedia className="media" image={PhotoPlace} title="place show"></CardMedia>
            <Typography className="labeled" component="span" ><img src={LabeledPlace} alt="labeled place" /></Typography>
          </Box>
          <Box className="desc_content">
            <Box className="head_title">
              <Typography className="place_title" variant="h2">{NamePlace}</Typography>
              <Typography className="place_price" component="span">{PricePlace} / day</Typography>
            </Box>
            {/* {TopRated} */}
            <Typography className="top_rated"><Award />Top Rated</Typography>
            <Typography className="place_location"><strong>Location :</strong>{AdressPlace}</Typography>
            <Typography className="place_capacity"><strong>Capacity :</strong><span className="value">{CapacityPlace} personnes</span></Typography>
            <Typography className="place_equipments">
              <strong>Equipement :</strong>
              <span className="value">
                <Wifi />
                <Photo />
                <Computer />
                <Cast />
              </span>
            </Typography>
          </Box>
          <Box className="check_content">
            <Checkbox 
              inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} 
              className="checkbox"
              icon= {<CheckboxLine fontSize='small' />}
              checkedIcon={<CheckboxChecked fontSize='small'/>}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardProject;

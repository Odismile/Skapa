import { Box, Button, SwipeableDrawer, Typography } from '@material-ui/core';
import { FC, useState, useEffect } from 'react';
import { CallbackFunction } from '../../types/types';
import CardProject from '../CardProjects/CardProjects';
import useStyles from './style';

interface DrawerAddToProjectProps {
  handleClose: CallbackFunction;
  handleOpen: CallbackFunction;
  isOpen: boolean;
}

const DrawerAddToProject: FC<DrawerAddToProjectProps> = ({ handleOpen, handleClose, isOpen }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // const { isReader, profilId: profilIdLocal, profil } = useCurrentUser();

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const onClose = () => {
    handleClose();
    setOpen(false);
  };
  const onOpen = () => {
    handleOpen();
    setOpen(true);
  };
  return (
    <SwipeableDrawer
      className={classes.drawerContribute}
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      classes={{
        paper: classes.drawerPaperContribute,
      }}
      SwipeAreaProps={{ className: 'backDrop_contribute' }}
    >
      <Box className={classes.addProject_drawerContent}>
        <Box className="header">
          <Button variant="contained" className="btn_handleDrawer" onClick={onClose}></Button>
          <Typography variant="h6">You want to hire Emma ?</Typography>
          <Button className="btn_done" onClick={onClose}>
            Done
          </Button>
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
  );
};

export default DrawerAddToProject;

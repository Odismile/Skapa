import React from 'react';
import { Box } from '@material-ui/core';
import PrimaryHeader from '../../Components/Header';
import useStyles from './styles';
import CardSpace from '../../Components/MyActivity/CardSpace/CardSpace';
import { useHistory } from 'react-router';

const MyActivity = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (params:string) => {
    history.push("/myactivity/"+params)
  }
  return (
    <Box>
      <PrimaryHeader />
      <Box className={classes.box}>
        <Box onClick={() => handleClick("contribute")}>
          <CardSpace title="Contributor space" subltitle="Lorem Ipsum" />
        </Box>
        <Box onClick={() => handleClick("talent")}>
          <CardSpace title="Talent space" subltitle="Lorem Ipsum" />
        </Box>
        <Box onClick={() => handleClick("creator")}>
          <CardSpace title="Creator space" subltitle="Lorem Ipsum" />
        </Box>
      </Box>
    </Box>
  );
};

export default MyActivity;

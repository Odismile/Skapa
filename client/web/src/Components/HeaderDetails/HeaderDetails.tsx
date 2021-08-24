import React, { FC } from 'react';
import { Box, Link } from "@material-ui/core";
import useStyles from './style';
import PrimaryHeader from '../Header';

const HeaderDetails:FC = (props) =>{
    const classes = useStyles();
    return(
        <Box className={classes.root}>
        <PrimaryHeader noBack/>
        <Box className={classes.mainContainer}>
          <Link href='/project' className='linkBack'>Back to results</Link>
          {props.children}
        </Box>
      </Box>
    )
}

export default HeaderDetails;
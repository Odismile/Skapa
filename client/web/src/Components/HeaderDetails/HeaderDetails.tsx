import React, { FC } from 'react';
import { Box, Link } from "@material-ui/core";
import useStyles from './style';
import PrimaryHeader from '../Header';

const HeaderDetails:FC = (props) =>{
    const classes = useStyles();
    return(
        <Box className={classes.root}>
        <PrimaryHeader />
        <Box className={classes.mainContainer}>
          <Link href='/project' className='linkBack'>Back to result</Link>
          {props.children}
        </Box>
      </Box>
    )
}

export default HeaderDetails;
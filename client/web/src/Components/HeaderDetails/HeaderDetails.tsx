import { FC } from 'react';
import { Box, Link } from '@material-ui/core';
import useStyles from './style';
import PrimaryHeader from '../Header';
import { useHistory } from 'react-router-dom';
import { PROJECT } from '../../Routes';

const HeaderDetails: FC = (props) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box className={classes.root}>
      <PrimaryHeader />
      <Box className={classes.mainContainer}>
        <Link onClick={() => history.push(PROJECT)} className="linkBack">
          Back to results
        </Link>
        {props.children}
      </Box>
    </Box>
  );
};

export default HeaderDetails;

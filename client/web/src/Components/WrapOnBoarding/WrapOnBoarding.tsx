import { Box, Link, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { FC } from 'react';
import mainLogo from '../../Assets/images/logo.svg';
import useStyles from './style';

const WrapOnBoarding: FC = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainPage}>
        <Box className="wrapPage">
          <Box component="header" className={classNames(classes.main_header)}>
            <figure className="logo">
              <img src={mainLogo} alt="logo" />
            </figure>
          </Box>
          <Box className={classNames(classes.mainContainer)}>{props.children}</Box>
          <Box component="footer" className={classes.footerPage}>
            <Typography className="link-footer">
              <Link href="#">Skip this step</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WrapOnBoarding;

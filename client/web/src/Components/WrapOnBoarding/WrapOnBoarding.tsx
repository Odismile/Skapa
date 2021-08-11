import { Box, Link, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { FC } from 'react';
import mainLogo from '../../Assets/images/logo.svg';
import useStyles from './style';
interface WrapBoProps{
  width?: number;
  marginTop?: number;
}

const WrapOnBoarding: FC<WrapBoProps> = (props) => {
  const w = props.width || 105;
  const mT = props.marginTop || 0;
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainPage}>
        <Box className="wrapPage">
          <Box component="header" className={classNames(classes.main_header)}>
            <figure className="logo">
              <img src={mainLogo} alt="logo" style={{ width: w, marginTop: mT}}/>
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

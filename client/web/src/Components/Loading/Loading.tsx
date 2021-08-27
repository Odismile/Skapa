import { FC } from 'react';
import { CircularProgress, CircularProgressProps } from '@material-ui/core';

const LoadingComponent: FC<CircularProgressProps> = (props) => {
  const { size, ...otherProps } = props;
  return <CircularProgress color="inherit" size={size || 12} {...otherProps} />;
};

export default LoadingComponent;

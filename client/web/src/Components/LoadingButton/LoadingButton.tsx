import { FC } from 'react';
import { Button, ButtonProps } from '@material-ui/core';
import LoadingComponent from '../Loading/Loading';

interface ButtonCustomProps {
  isLoading?: boolean;
}
const LoadingButton: FC<ButtonProps & ButtonCustomProps> = (props) => {
  const { isLoading, children, disabled, ...otherProps } = props;
  return (
    <Button disabled={isLoading || disabled} {...otherProps}>
      {isLoading ? <LoadingComponent /> : children}
    </Button>
  );
};

export default LoadingButton;

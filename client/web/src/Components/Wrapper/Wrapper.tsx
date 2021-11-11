import Box from '@material-ui/core/Box';

const WrapperComponent = (props: any) => {
  const { children, isOrderHeader } = props;

  return (
    <Box>
      Header
      {children}
      Footer
    </Box>
  );
};

const Wrapper = (WrappedComponent: any, isOrderHeader?: any) => () =>
  (
    <WrapperComponent isOrderHeader={isOrderHeader}>
      <WrappedComponent />
    </WrapperComponent>
  );

export default Wrapper;

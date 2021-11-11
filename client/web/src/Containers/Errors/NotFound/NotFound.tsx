import { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Box from '@material-ui/core/Box';


interface NotFoundProps {}

/**
 * NotFound component
 *
 * @param props NotFoundProps
 * @returns
 */
const NotFound: FC<NotFoundProps & RouteComponentProps> = () => {
  // const { history } = props;

  return (
    <Box width="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="center" height="100vh">
      Page introuvable
    </Box>
  );
};

export default withRouter(NotFound);

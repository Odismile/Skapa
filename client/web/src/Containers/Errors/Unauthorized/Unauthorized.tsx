import React, { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Box from '@material-ui/core/Box';


interface UnauthorizedProps {}

/**
 * Unauthorized component
 *
 * @param props UnauthorizedProps
 * @returns
 */
const Unauthorized: FC<UnauthorizedProps & RouteComponentProps> = (/*props*/) => {
  // const { history } = props;
  // const { t } = useTranslation();

  return (
    <Box width="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="center" height="100vh">
      Page non autorisée
    </Box>
  );
};

export default withRouter(Unauthorized);

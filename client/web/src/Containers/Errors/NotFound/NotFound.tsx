import React, { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';

//import useStyles from './styles';

interface NotFoundProps {}

/**
 * NotFound component
 *
 * @param props NotFoundProps
 * @returns
 */
const NotFound: FC<NotFoundProps & RouteComponentProps> = (props) => {
  //const { history } = props;
  //const { t } = useTranslation();

  return (
    <Box width="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="center" height="100vh">
      Page introuvable
    </Box>
  );
};

export default withRouter(NotFound);

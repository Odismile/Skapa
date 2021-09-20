import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    userProfil: {
      display: 'flex',
      alignItems: 'center',
      "& .user_avatar": {
        height: 45,
        width: 45,
      },
      "& .user_infos": {
        marginLeft: 10,
      },
      "& p": {
        color: '#383838',
        lineHeight: 1.4,
        margin: 0,
      },
      "& .user_name": {
        fontSize: 14,
        fontWeight: 400,
      },
      "& .user_job": {
        fontSize: 12,
        fontWeight: 300,
      }
    },
  }),
  { name: 'UserProfil' },
);

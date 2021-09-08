import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    team_bloc: {
      display: 'flex',
      alignItems: 'center',
      "& .team_title": {
        fontSize: 10,
        display: 'inline-flex',
        fontWeight: 700,
        lineHeight: 1.25,
        marginRight: 5,
      },
    },
    avatarList: {

    },
    avatarItem: {
      
    },
  }),
  { name: "team" }
);
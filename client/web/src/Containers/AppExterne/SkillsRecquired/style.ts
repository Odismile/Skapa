import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    skills_recquired: {
      display: 'flex',
      marginBottom: 0,
      "& label": {
        fontSize: 10,
        fontWeight: 700,
        marginRight: 5,
        padding: '3px 0',
        whiteSpace: 'nowrap',
      },
      "& .skills_list": {
        display: 'flex',
        flexWrap: 'wrap',
        "& .skill_item": {
          borderRadius: 13,
          background: "#ece8ff",
          color: "#634ecb",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 10,
          fontWeight: 400,
          height: 20,
          minWidth: 67,
          margin: "0 3px 5px 0",
        },
      },
    },
  }),
  { name: "skillsRecquired" }
);
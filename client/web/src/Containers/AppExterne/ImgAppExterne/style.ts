import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    cardMedia_content: {
      position: 'relative',
      marginBottom: 10,
      "& .media": {
        borderRadius: 10,
        height: 77,
        width: '100%',
      },
      "& .labeled": {
        borderRadius: 13,
        background: "#ece8ff",
        color: "#634ecb",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 10,
        fontWeight: 400,
        height: 20,
        minWidth: 66,
        position: 'absolute',
        top: 8,
        left: 8,
        zIndex: 1,
      },
    },
  }),
  { name: "imgAppExterne" }
);
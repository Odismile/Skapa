import { makeStyles } from '@material-ui/core/styles';
import { NONAME } from 'dns';

const useStyles = makeStyles(() => ({
  textfield: {
    width: '100%',
    margin: '0px 0px 15px 0px',
    '& .Mui-focused': {
      color: '#000000',
    },
    '& label': {
      color: '#000000',
      fontSize: 14,
      fontStyle: 'italic',
      fontWeight: '600',
      marginBottom: 0,
      transform: 'translate(0, 1.5px) scale(1)',
    },
    "& > div": {
      marginTop: 20,
      marginBottom: 10,
      //marginTop: 24,
      '&:after, &:before': {
        border: 'none',
      },
      '&:hover:before': {
        borderBottom: 'none !important',
      },
      '& input': {
        boxSizing: "border-box",
        color: '#000000',
        fontSize: 14,
        height: 40,
        border: 'solid 1px #dfdfdf',
        boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
        borderRadius: 25,
        padding: "10px 16px",
        '&:focus':{
          border: '1px solid #8870FF',
          background: "rgb(242,241,253)",
          boxShadow: "inset 0px 1px 3px rgb(136 112 255 / 50%)",
        },
        "&::-webkit-input-placeholder": {
          color: '#979797',
          fontStyle: 'italic',
        },
        "&::-moz-input-placeholder": {
          color: '#979797',
          fontStyle: 'italic',
        },
      },
      '&:focus': {
        border: 'none',
      },
    },
    "& .append_input": {
      position: "absolute",
      right: 10, top: 10,
      height: "auto",
      maxHeight: "100%",
      zIndex: 1,
      "&:empty": {
        display: "none",
        pointerEvents: "none",
      },
      "& svg": {
        fontSize: "1.25rem",
        fill: "#8870FF",
        "& path": {
        }
      },
    },
  },
}));

export default useStyles;

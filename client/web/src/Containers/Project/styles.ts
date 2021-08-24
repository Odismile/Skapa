import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    projectPage: { },
    projectContainer: {
      padding: '30px 20px 30px',
      "@media (min-width: 768px)": {
        margin: "0 auto",
        maxWidth: 640,
        paddingLeft: 64,
        paddingRight: 64,
      },
    },
    tabSelected:{
      color: '#8870FF !important',
      textTransform: 'capitalize',
      fontWeight: 700,
    },
    label:{
      color: 'black',
      textTransform: 'capitalize',
    },
    indicator:{
      display: 'none',
    },
    tab:{
      minWidth: "auto",
      padding: "0 10px",
      minHeight: 'unset',
    },
    tabs:{
      minHeight: 'unset',
      '& div>div>button:nth-child(2)':{
        borderRight: '1px solid #8870FF',
        borderLeft: '1px solid #8870FF',
      }
    }
  }),
  { name: "Project" }
);

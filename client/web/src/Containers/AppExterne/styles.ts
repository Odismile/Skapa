import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    mainPage: {},
    indicator:{
      display: 'none',
    },
    label:{
      color: 'black',
      textTransform: 'capitalize',
    },
    tab:{
      padding: 0,
      minHeight: 'unset',
    },
    tabSelected:{
      color: '#8870FF!important',
      textTransform: 'capitalize',
      fontWeight: 700,
      '& .number':{
        backgroundColor: '#ECE8FF!important',
      }
    },
    tabs:{
      minHeight: 'unset',
      '& div > div': {
        '& > button':{
          position: 'relative',
          '&:after': {
            backgroundColor: '#8870FF',
            content: "''",
            height: 15,
            position: 'absolute',
            right: 0,
            top: 5,
            width: 1,
          },
          '&:last-child':{
            '&:after': {
              display: 'none',
            }
          }
        },
      },
      // '& div>div>button:first-child':{
      //   borderRight: '1px solid #8870FF',
      // }
    },
    requestList: {
      display: 'block',
      padding: '0 20px',
    },
    onGoingList: {
      display: 'block',
      padding: '0 20px',
    },
    previous_list: {
      display: 'block',
      padding: '0 20px',
    },
  }),
  { name: 'AppExterne' },
);

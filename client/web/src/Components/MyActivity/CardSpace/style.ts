import { makeStyles } from '@material-ui/core/styles';
import { Autoplay } from 'swiper';

export default makeStyles((theme) => ({
  card: {
    borderRadius: 12,
    border: 'solid 1px #f4f4f4',
    background: '#ffffff',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.11)',
    '& .contentCard': {
      padding: 7,
      display: 'flex',
      alignItems: 'center',
      '& img': {
        height: 80,
        width: 80,
      },
      '& .details': {
        marginLeft: 40,
        '& p':{
          marginBottom: 0,
          '&.title':{
            fontSize: 16,
            fontWeight: 700,
            color: '#8870FF',
          },
          '&.subtitle':{
            fontStyle: 'italic',
            fontSize: 12,
          }
        }
      },
    },
  },
}));

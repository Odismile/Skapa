import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root:{
    '& .filter-icon':{
      border: '1px solid #FFFFFF',
    },
    '& .input-search':{
      borderRadius: 20,
      border: 'solid 1px #dfdfdf',
      backgroundColor: '#ffffff',
      boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
    },
    '& .filter-icon svg>g>path':{
      stroke: '#ffffff',
    }
  }
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';
import imgCard from '../../Assets/images/lab.svg';
import noir from '../../Assets/images/noir.svg';

export default makeStyles((theme) => ({
    content: {
        paddingTop: 23,
        "& .title": {
            color: '#000000',
            marginBottom: 8,
        },
    },
    tags: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        gap: 6,
        '&>div': {
            backgroundColor: '#ECE8FF',
            color: '#8870FF',
            height: 20,
            fontSize: 10,
        }
    }
}));

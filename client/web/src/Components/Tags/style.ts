import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
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

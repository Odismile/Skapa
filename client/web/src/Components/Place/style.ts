import { makeStyles } from '@material-ui/core/styles';
import imgCard from '../../Assets/images/lab.svg';
import noir from '../../Assets/images/noir.svg';

export default makeStyles((theme) => ({
    box: {
        paddingTop: 23,
        "& .title": {
            color: '#000000',
            marginBottom: 8,
        },
    },
    root: {
        boxShadow: '0px 2px 4px #0000001C',
        border: '1px solid #F4F4F4',
        borderRadius: 12,
        padding: '7px 10px',
        '& .media': {
            height: 75,
            // backgroundColor: '#a1a1a1',
            borderRadius: 10,
        },
        '& .content': {
            marginTop: 10,
            padding: 0,
            '& .title': {
                fontSize: 14,
                fontWeight: 700,
                color: '#000000',
                marginBottom: 0,
            },
            '& .chips': {
                backgroundColor: '#DFFFF2',
                color: '#5BD3A0',
                height: 17,
                padding: '2px 7px',
                fontSize: 10,
                borderRadius: 13,
            },
            '& .name-money': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            },
            '& .location': {
                fontSize: 10,
                color: '#000000',
                marginBottom: 0,
                '& span': {
                    fontWeight: 700,
                }
            },
        }
    }
}));

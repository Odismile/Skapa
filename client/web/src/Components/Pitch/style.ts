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
        '& .video':{
            marginTop: 15,
            '& video':{
                height: 168,
                width: '100%',
                borderRadius: 10,
            }
        }
    },
}));

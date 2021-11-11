import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
        // paddingTop: 23,
        "& .title": {
            color: '#000000',
            marginBottom: 8,
        },
        '& .video':{
            marginTop: 15,
            '& video':{
                // height: 168,
                // width: 'auto!important',
                borderRadius: 10,
                objectFit: 'cover',
            }
        }
    },
}));

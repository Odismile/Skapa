import { makeStyles } from '@material-ui/core/styles';
import imgCard from '../../Assets/images/lab.svg';
import noir from '../../Assets/images/noir.svg';

export default makeStyles((theme) => ({
    content: {
        '& textarea': {
            color: '#000',
            border: 'solid 1px #dfdfdf',
            borderRadius: 12,
            boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
            fontFamily: "Nunito",
            fontSize: 12,
            padding: 16,
            resize: "none",
            width: "100%",
            background: "#fff",
            "&::-webkit-input-placeholder": {
                color: "#979797",
                fontStyle: "italic",
            },
            "&:focus": {
                outline: "none",
            },
        },
        '& .link':{
            display: 'flex',
            justifyContent: 'center',
            '& a':{
                fontSize: 12,
                color: '#8870FF',
                textDecoration: 'none',
                borderBottom: '1px solid #8870ff',
                fontStyle: "italic",
            }
        }
    },
}));

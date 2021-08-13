import { makeStyles } from '@material-ui/core/styles';
import { findLastIndex } from 'lodash';
import { relative } from 'path';
import { Autoplay } from 'swiper';
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
            position: "relative",
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
            '& p': {
                fontSize: 10,
                color: '#000000',
                marginBottom: 5,
                '& span': {
                    fontWeight: 700,
                },
                '&.equipement': {
                    display: "flex",
                    alignItems: "center",
                    "& .icon-equipement" : {
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 7,
                        "& .icon": {
                            marginRight: 5,
                            height: 12,
                        }
                    }
                }
            },
        }
    },
    addProject: {
        position: "absolute",
        bottom: 4,
        right: 0,
    },
    button: {
        borderRadius: 25,
        fontSize: 12,
        padding: "10px 15px",
        height: "auto",
        lineHeight: 1.5,
    }
}));

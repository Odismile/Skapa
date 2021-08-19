import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    box: {
        
    },
    root: {
        boxShadow: '0px 2px 4px #0000001C',
        border: '1px solid #F4F4F4',
        borderRadius: 12,
        padding: '7px 10px',
        position: "relative",
        flexDirection: "column",
        '& .media': {
            height: 75,
            borderRadius: 10,
            position: "relative",
            "& .bitmap": {
                position: "absolute",
                top: 6,
                left: 6,
                zIndex: 10,
            },
            "& .bitmap-image": {
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "#D8D8D8",
                display: "flex",
                alignItems:  "center",
                justifyContent: "center",
                border: "2px solid #fff",
                margin: 0,
                padding: 0,
            },
            "& .btn-favori": {
                position: "absolute",
                top: 6,
                right: 6,
                zIndex: 10,
                padding: 0,
                "&:focus, &:hover": {
                    '& svg': {
                        '& path': {
                          fill: '#e30057',
                          d: "path('M19.4,1.8c-1-1.1-2.4-1.8-3.9-1.8s-2.9,0.6-3.9,1.8l-1.1,1.2L9.4,1.8c-2.2-2.4-5.7-2.4-7.8,0 c-2.2,2.4-2.2,6.2,0,8.5l1.1,1.2l7.8,8.5l7.8-8.5l1.1-1.2C20.4,9.2,21,7.6,21,6S20.4,2.9,19.4,1.8z')",
                        },
                    }
                },
                "& svg": {
                    "& path": {
                        width: 20,
                        height: 20,
                        fill: "#fff"
                    }

                }
            }
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
            '& .top-rated': {
                display: "flex",
                alignItems: "center",
                color: "#e30057",
                fontSize: 14,
                fontWeight: "600",
                textTransform: "uppercase",
                margin: "10px 0",
                "& svg": {
                    paddingRight: 4,
                    width: 15,
                    height: 25,
                    "& path": {
                        fill: "#e30057",
                    }
                }
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
    check: {
        position: "absolute",
        bottom: 0,
        right: 0,
        "& .checkbox": {
            width: 20,
            height: 20,
            borderRadius: 5,
            color: "#8870FF",
        }
    },
    button: {
        borderRadius: 25,
        fontSize: 12,
        padding: "10px 15px",
        height: "auto",
        lineHeight: 1.5,
    }
}));

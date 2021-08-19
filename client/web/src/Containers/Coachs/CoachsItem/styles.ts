import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    coachBloc: {
      background: "none",
      boxShadow: "none",
      borderRadius: 0,
      maxWidth: 335,
      margin: 'auto',
      padding: "1px 1px 28px",
      position: 'relative',
      width: "100%",
      '& .coach_content': {
        padding: 0,
      },
      '& .coach_wrap': {
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0px 2px 4px rgba(0,0,0,0.11)",
        border: "1px solid #f4f4f4",
        display: "flex",
        alignItems: "center",
        padding: "9px 9px 28px",
        width: "100%",
      },
      '& .avatar_content': {
        borderRadius: 10,
        display: "flex",
        flex: "1 0 73px",
        height: 73,
        position: "relative",
        width: 73,
        "& .avatar_coach": {
          height: "inherit",
          width: "inherit",
        },
        "& .icon_job": {
          background: "#fff",
          borderRadius: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 30,
          minHeight: 30,
          minWidth: 30,
          position: "absolute",
          top: -7,
          left: -7,
          width: 30,
          "& img": {
            height: "auto",
            width: 16,
          },
        },
      },
      "& .infos_content": {
        flex: "1 1 100%",
        paddingLeft: 10,
        "& p": {
          fontSize: 10,
        },
      },
      "& .title_coach": {
        color: "#000",
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1.4,
        marginBottom: 5,
      },
      "& .rating_label": {
        color: "#e30057",
        fontWeight: 600,
        marginBottom: 5,
        "& svg": {
          fontSize: 12,
          marginRight: 5,
          verticalAlign: -2,
        },
        "& span": {
          textTransform: "uppercase",
        },
      },
      "& .info_coach": {
        marginBottom: 3,
        "& strong": {
          fontWeight: 700,
        },
        "& span": {
          fontWeight: 400,
        },
      },
      "& .infoJob_coach": {
        margin: 0,
        "& p": {
          display: "inline-block",
          margin: 0,
        },
        "& strong": {
          fontWeight: 700,
        },
        "& span": {
          fontWeight: 400,
        },
        "& .level_coach": {
          marginRight: 10,
        },
      },
      "& .btn_wrap": {
        padding: 0,
        position: 'absolute',
        left: -9, right: -9,
        bottom: 12,
        textAlign: "center",
        minWidth: "100%",
        zIndex: 1,
        
      },
      "& .btn_planMeeting": {
        borderRadius: 35,
        fontSize: 12,
        fontWeight: 400,
        height: 35,
        padding: "5px 15px",
        width: 118,
      },
    },
  }),
  { name: "CoachsItem" }
);

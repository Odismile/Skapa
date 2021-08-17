import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    mainPage: {
      "& .wrapPage": {
        padding: "0 20px",
      },
    },
    list_coachs: {
      margin: "20px auto 0",
      maxWidth: "100%",
      width: "100%",
      "@media (min-width: 768px)": {
        justifyContent: "flex-start",
      },
      "@media (min-width: 992px)": {
      },
      "@media (min-width: 1280px)": {
        maxWidth: 1280,
      },
      "& .item_bloc": {
        marginBottom: 10,
        width: "100%",
        "& .titre_item": {
          color: "#000",
          fontSize: 14,
          fontWeight: 700,
          margin: "0 0 10px",
        },
        "& .item_list": {
          display: "flex",
          flexWrap: "wrap",
          "@media (min-width: 768px)": {
            margin: "0 -8px",
          },
        },
      },
      "& .coachBloc": {
        "@media (min-width: 640px)": {
          maxWidth: "100%",
        },
        "@media (min-width: 768px)": {
          margin: "0 8px",
          width: "calc(50% - 16px)",
        },
        "@media (min-width: 800px)": {
          width: "calc(33.33333% - 16px)",
        },
        "@media (min-width: 1200px)": {
          width: "calc(25% - 16px)",
        },
      },
    },
  }),
  { name: "Coachs" }
);

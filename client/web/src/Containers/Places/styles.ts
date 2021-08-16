import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    modal :{
      "& .modal-content": {
        background : "#ffffff",
        height: "80%",
        borderRadius: 12,
        overflow: "hidden",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: 14,
        display: "flex",
        flexDirection: "column",
        minWidth: 300,
        "& .modal-top": {
          display: "flex",
          justifyContent: "space-between",
          height: 50,
          flex: "1 0",
          alignItems: "center",
          padding: "0 0 15px 0",
          borderBottom: "1px solid #dfdfdf",
          "& h2": {
            fontSize: 16,
            color: "#000000",
            marginBottom: 0,
            fontWeight: 700,
          },
          "& .close-modal": {
            padding: 0,
          },
          "& svg": {
            width: 15,
            height: 15,
          }
        },
        "& .modal-body": {
          height: "calc(100% - 50px)",
          flex: "1 1 100%",
          overflow: "hidden auto",
          padding: 14,
        }
      },
    },
    root: {
      display: 'flex',
      alignItems: 'center',
      boxShadow: "none",
      background: "none",
      "& .input-search": {
        fontSize: 14,
        padding: "10px 16px",
        border: 'solid 1px #dfdfdf',
        boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
        borderRadius: 25,
        display: "flex",
        flex: 1,
        "& .search-icon": {
          padding: 0,
        }
      },
      "& .filter-icon": {
        border: "1px solid #8870ff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 8,
        padding: 9,
      }
    },
    box:{
      marginTop:14,
    },
    content:{
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 10,
      marginTop: 4,
    },
    searchProject: {
      maxWidth: 320,
      margin: "0 auto",
      background: "#ffffff",
      "& .form-control": {
        width: "100%",
        "& .form-control-item": {
          marginBottom: 14,
          "& h2": {
            fontSize: 14,
            fontWeight: "700",
            color: "#000000",
            marginTop: 0,
            paddingLeft: 18,
          },
          "& .filter-content": {
            paddingLeft: 18,
          },
          '& .field_item': {
            position: 'relative',
            '& > div': {
              margin: 0,
            },
            '& label ': {
              color: '#000',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '1.4',
              margin: 0,
              '& + > div': {
                marginBottom: 0,
              },
            },
            '& input': {
              borderRadius: 35,
              fontSize: 12,
              height: 33,
              padding: '0 20px',
              '&::-webkit-input-placeholder': {
                color: '#979797',
                fontStyle: 'italic',
                opacity: 1,
              },
            },
            '& .btn_append': {
              padding: 0,
              position: 'absolute',
              right: 0,
              '& svg': {
                fill: theme.palette.primary.main,
              },
            },
          },
          '& .field_date': {
            width: 110,
            '& div:hover:before': {
              borderBottom: 'none!important',
            },
            '& label': {
              marginBottom: 0,
            },
  
            '& .input_date': {
              width: '100%',
              '& input': {
                border: 'solid 1px #dfdfdf',
                boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
                borderRadius: 25,
                padding: '0 5px 0 10px',
                "&[type='date' i]": {
                  '&::-webkit-calendar-picker-indicator': {
                    backgroundImage:
                      "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgd2lkdGg9IjEzcHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDEzIDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8ZGVmcz4NCiAgICA8ZmlsdGVyIGlkPSJmaWx0ZXJfMSI+DQogICAgICA8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC41MzMzMzMzNiAwIDAgMCAwIDAuNDM5MjE1NyAwIDAgMCAwIDEgMCAwIDAgMSAwIiAvPg0KICAgIDwvZmlsdGVyPg0KICA8L2RlZnM+DQogIDxnIGlkPSJJY29uQ2FsZW5kYXIiPg0KICAgIDxnIGlkPSJjYWxlbmRhci0oNCkiIGZpbHRlcj0idXJsKCNmaWx0ZXJfMSkiPg0KICAgICAgPHBhdGggZD0iTTAuOTk5IDBMMTEuNjAxIDBRMTEuNjk5NCAwIDExLjc5NTkgMC4wMTkxOTU1UTExLjg5MjQgMC4wMzgzOTEgMTEuOTgzMyAwLjA3NjA0NDNRMTIuMDc0MiAwLjExMzY5OCAxMi4xNTYgMC4xNjgzNjJRMTIuMjM3OCAwLjIyMzAyNiAxMi4zMDc0IDAuMjkyNlExMi4zNzcgMC4zNjIxNzUgMTIuNDMxNiAwLjQ0Mzk4NVExMi40ODYzIDAuNTI1Nzk2IDEyLjUyNCAwLjYxNjY5OVExMi41NjE2IDAuNzA3NjAyIDEyLjU4MDggMC44MDQxMDVRMTIuNiAwLjkwMDYwNyAxMi42IDAuOTk5TDEyLjYgMTEuNjAxUTEyLjYgMTEuNjk5NCAxMi41ODA4IDExLjc5NTlRMTIuNTYxNiAxMS44OTI0IDEyLjUyNCAxMS45ODMzUTEyLjQ4NjMgMTIuMDc0MiAxMi40MzE2IDEyLjE1NlExMi4zNzcgMTIuMjM3OCAxMi4zMDc0IDEyLjMwNzRRMTIuMjM3OCAxMi4zNzcgMTIuMTU2IDEyLjQzMTZRMTIuMDc0MiAxMi40ODYzIDExLjk4MzMgMTIuNTI0UTExLjg5MjQgMTIuNTYxNiAxMS43OTU5IDEyLjU4MDhRMTEuNjk5NCAxMi42IDExLjYwMSAxMi42TDAuOTk5IDEyLjZRMC45MDA2MDcgMTIuNiAwLjgwNDEwNSAxMi41ODA4UTAuNzA3NjAyIDEyLjU2MTYgMC42MTY2OTkgMTIuNTI0UTAuNTI1Nzk2IDEyLjQ4NjMgMC40NDM5ODUgMTIuNDMxNlEwLjM2MjE3NSAxMi4zNzcgMC4yOTI2IDEyLjMwNzRRMC4yMjMwMjYgMTIuMjM3OCAwLjE2ODM2MiAxMi4xNTZRMC4xMTM2OTggMTIuMDc0MiAwLjA3NjA0NDMgMTEuOTgzM1EwLjAzODM5MSAxMS44OTI0IDAuMDE5MTk1NSAxMS43OTU5UTAgMTEuNjk5NCAwIDExLjYwMUwwIDAuOTk5UTAgMC45MDA2MDcgMC4wMTkxOTU1IDAuODA0MTA1UTAuMDM4MzkxIDAuNzA3NjAyIDAuMDc2MDQ0MyAwLjYxNjY5OVEwLjExMzY5OCAwLjUyNTc5NiAwLjE2ODM2MiAwLjQ0Mzk4NVEwLjIyMzAyNiAwLjM2MjE3NSAwLjI5MjYgMC4yOTI2UTAuMzYyMTc1IDAuMjIzMDI2IDAuNDQzOTg1IDAuMTY4MzYyUTAuNTI1Nzk2IDAuMTEzNjk4IDAuNjE2Njk5IDAuMDc2MDQ0M1EwLjcwNzYwMiAwLjAzODM5MSAwLjgwNDEwNSAwLjAxOTE5NTVRMC45MDA2MDcgMCAwLjk5OSAwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxLjQpIiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIC8+DQogICAgICA8cGF0aCBkPSJNMC4zNSAwTDAuMzUgMi44IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4Ljc1IDApIiBpZD0iUGF0aCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPg0KICAgICAgPHBhdGggZD0iTTAuMzUgMEwwLjM1IDIuOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4xNSAwKSIgaWQ9IlBhdGgiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4NCiAgICAgIDxwYXRoIGQ9Ik0wIDAuMzVMMTIuNiAwLjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUuMjUpIiBpZD0iUGF0aCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+')",
                    marginLeft: 5,
                    height: 14,
                    width: 14,
                  },
                  '&::-moz-calendar-picker-indicator': {
                    backgroundImage:
                      "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgd2lkdGg9IjEzcHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDEzIDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8ZGVmcz4NCiAgICA8ZmlsdGVyIGlkPSJmaWx0ZXJfMSI+DQogICAgICA8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC41MzMzMzMzNiAwIDAgMCAwIDAuNDM5MjE1NyAwIDAgMCAwIDEgMCAwIDAgMSAwIiAvPg0KICAgIDwvZmlsdGVyPg0KICA8L2RlZnM+DQogIDxnIGlkPSJJY29uQ2FsZW5kYXIiPg0KICAgIDxnIGlkPSJjYWxlbmRhci0oNCkiIGZpbHRlcj0idXJsKCNmaWx0ZXJfMSkiPg0KICAgICAgPHBhdGggZD0iTTAuOTk5IDBMMTEuNjAxIDBRMTEuNjk5NCAwIDExLjc5NTkgMC4wMTkxOTU1UTExLjg5MjQgMC4wMzgzOTEgMTEuOTgzMyAwLjA3NjA0NDNRMTIuMDc0MiAwLjExMzY5OCAxMi4xNTYgMC4xNjgzNjJRMTIuMjM3OCAwLjIyMzAyNiAxMi4zMDc0IDAuMjkyNlExMi4zNzcgMC4zNjIxNzUgMTIuNDMxNiAwLjQ0Mzk4NVExMi40ODYzIDAuNTI1Nzk2IDEyLjUyNCAwLjYxNjY5OVExMi41NjE2IDAuNzA3NjAyIDEyLjU4MDggMC44MDQxMDVRMTIuNiAwLjkwMDYwNyAxMi42IDAuOTk5TDEyLjYgMTEuNjAxUTEyLjYgMTEuNjk5NCAxMi41ODA4IDExLjc5NTlRMTIuNTYxNiAxMS44OTI0IDEyLjUyNCAxMS45ODMzUTEyLjQ4NjMgMTIuMDc0MiAxMi40MzE2IDEyLjE1NlExMi4zNzcgMTIuMjM3OCAxMi4zMDc0IDEyLjMwNzRRMTIuMjM3OCAxMi4zNzcgMTIuMTU2IDEyLjQzMTZRMTIuMDc0MiAxMi40ODYzIDExLjk4MzMgMTIuNTI0UTExLjg5MjQgMTIuNTYxNiAxMS43OTU5IDEyLjU4MDhRMTEuNjk5NCAxMi42IDExLjYwMSAxMi42TDAuOTk5IDEyLjZRMC45MDA2MDcgMTIuNiAwLjgwNDEwNSAxMi41ODA4UTAuNzA3NjAyIDEyLjU2MTYgMC42MTY2OTkgMTIuNTI0UTAuNTI1Nzk2IDEyLjQ4NjMgMC40NDM5ODUgMTIuNDMxNlEwLjM2MjE3NSAxMi4zNzcgMC4yOTI2IDEyLjMwNzRRMC4yMjMwMjYgMTIuMjM3OCAwLjE2ODM2MiAxMi4xNTZRMC4xMTM2OTggMTIuMDc0MiAwLjA3NjA0NDMgMTEuOTgzM1EwLjAzODM5MSAxMS44OTI0IDAuMDE5MTk1NSAxMS43OTU5UTAgMTEuNjk5NCAwIDExLjYwMUwwIDAuOTk5UTAgMC45MDA2MDcgMC4wMTkxOTU1IDAuODA0MTA1UTAuMDM4MzkxIDAuNzA3NjAyIDAuMDc2MDQ0MyAwLjYxNjY5OVEwLjExMzY5OCAwLjUyNTc5NiAwLjE2ODM2MiAwLjQ0Mzk4NVEwLjIyMzAyNiAwLjM2MjE3NSAwLjI5MjYgMC4yOTI2UTAuMzYyMTc1IDAuMjIzMDI2IDAuNDQzOTg1IDAuMTY4MzYyUTAuNTI1Nzk2IDAuMTEzNjk4IDAuNjE2Njk5IDAuMDc2MDQ0M1EwLjcwNzYwMiAwLjAzODM5MSAwLjgwNDEwNSAwLjAxOTE5NTVRMC45MDA2MDcgMCAwLjk5OSAwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxLjQpIiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIC8+DQogICAgICA8cGF0aCBkPSJNMC4zNSAwTDAuMzUgMi44IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4Ljc1IDApIiBpZD0iUGF0aCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPg0KICAgICAgPHBhdGggZD0iTTAuMzUgMEwwLjM1IDIuOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4xNSAwKSIgaWQ9IlBhdGgiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4NCiAgICAgIDxwYXRoIGQ9Ik0wIDAuMzVMMTIuNiAwLjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUuMjUpIiBpZD0iUGF0aCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+')",
                    marginLeft: 10,
                    width: 12,
                  },
                },
              },
              '& > div': {
                marginTop: 24,
                marginBottom: 0,
                '&:before, &:after': {
                  border: 'none',
                },
              },
            },
          },
          "& .grid_field": {
            display: 'flex',
            alignItems: 'center',
            '& .field_item': {
              marginRight: 10,
              '&:last-child': {
                marginRight: 0,
              },
            },
          },
        },
        "& .form-control-content": {
          borderRadius: 12,
          boxShadow: "inset 0px 1px 3px rgba(0,0,0,0.2)",
          padding: "10px 18px",
        },
        "& .form-control-label": {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 0,
          marginBottom: 8,
          "&:last-child": {
            marginBottom: 0,
          },
          "& span:nth-child(2)": {
            margin: 0,
            fontSize: 12,
            color: "#000000",
          },
          "& .form-checkbox": {
            color: "#8870FF",
            padding: 0,
            borderRadius: 4,
            width: 20,
            height: 20,
            borderWidth: 1,
          }
        },
        "& .form-switch-item": {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 5,
          "& label": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 0,
            width: "100%",
            "& > span:nth-child(2)": {
              marginBottom: 0,
              fontSize: 10,
              fontWeight: "700",
              color: "#000000",
            },
          }
        }
      }
    },
    input: {
      flex: 1,
      marginBottom: 0,
      padding: 0,
      "& input": {
        padding: 0,
        "&::placeholder": {
          fontStyle: "italic",
          fontSize: 12
        }
      },
      
    },
    iconButton: {
      padding: "0px 0px 0px 8px",
    },
    SwitchAroundMe: {
      padding: 0,
      width: 52,
      height: 28,
    },
    switchBase: {
      color: "#dfdfdf",
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      left: 4,
      top: 3,
      '&$checked': {
        color: "#dffff2",
        transform: "translateX(22px)",
      },
      '&$checked + $track': {
        backgroundColor: "#5bd3a0",
      },
      '&$checked + $thumb': {
        backgroundColor: "red",
      },
    },
    checked: {},
    track: {
      width: 52,
      height: 28,
      borderRadius: 16,
    },
    thumb: {
      width: 22,
      height: 22,
    }
  }),
);

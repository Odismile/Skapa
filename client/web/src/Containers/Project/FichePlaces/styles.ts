import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginTop: 15,
    "& .details": {
      border: "dashed 1px #f4f4f4",
      background: "#ffffff",
      boxShadow: "0px 2px 4px rgba(0,0,0,0.11)",
      padding: 11,
      borderRadius: 12,
      position: "relative",
      zIndex: 2,
    },
    '& .title': {
      color: '#000000',
      marginBottom: 8,
    },
    "& .places": {
      marginBottom: 20,
      background: "#fff",
      '& >div':{
        boxShadow: 'none',
        padding: 0,
        border: 'none',
        '& >div':{
          boxShadow: 'none',
        }
      }
    },
    "& .presentation": {
      marginBottom: 20,
      background: "#fff",
    },
    "& .picture": {
      marginBottom: 20,
      background: "#fff",
    },
    "& .contact": {
      marginBottom: 20,
      background: "#fff",
      "& p": {
        fontSize: 10,
        color: "#000000",
        "& span": {
          fontWeight: "700",
        }
      }
    },
    '& .boxBtn': {
      display: 'flex',
      justifyContent: 'center',
      margin: '20px 0px',
      background: "#fff",
      '& .btnAdd': {
        backgroundColor: '#8870FF',
        height: 35,
        color: 'white',
        fontSize: 12,
        fontWeight: 600,
        padding: "10px 15px",
      },
    },
    "& .disponibilite": {
      marginBottom: 20,
      background: "#fff",
    },
    '& .list-picture': {
      display: "flex",
      justifyContent: "space-between",
      alignItems:  "center",
      
      "& figure": {
        width: "30%",
        height: "76px",
        overflow: "hidden",
        margin: 0,
        borderRadius: 5,
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }
      }
    },
    "& .equipement": {
      marginBottom: 20,
      "& .equipement-item": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 12,
        color: "#000",
        "& svg": {
          width: 17,
        }
      }
    },
    '& .link': {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      "& a": {
        borderBottom: "1px solid #8870ff",
        fontStyle: "italic",
      }
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
    '& .field_date': {
      width: 110,
      '& div:hover:before': {
        borderBottom: 'none!important',
      },
      '& label': {
        marginBottom: 0,
        fontSize: 10,
        fontWeight: "700",
        color: "#000",
      },

      '& .input_date': {
        width: '100%',
        '& input': {
          border: 'solid 1px #dfdfdf',
          boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
          borderRadius: 25,
          padding: '10px 14px',
          fontSize: 12,
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
          marginTop: 15,
          marginBottom: 0,
          '&:before, &:after': {
            border: 'none',
          },
        },
      },
    },
    '& .skills':{
        marginBottom: 20,
    },
  },
  mainPage: { },
    mainContainer: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 30,
    },
}));

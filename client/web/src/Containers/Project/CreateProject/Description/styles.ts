import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    imageUpload: {
      width: '75px',
      height: '65px',
    },
    videoUpload: {},
    description: {
      //paddingBottom: 30,
      '& .upload_bloc': {
        marginBottom: 20,
        '&  .upload_picture': {
          display: 'none',
        },
        '& .upload_content': {
          background: '#eee',
          borderRadius: 10,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
          width: '100%',
          '& svg': {
            fill: theme.palette.primary.main,
            fontSize: '1.25rem',
            marginBottom: 10,
          },
          '& > span': {
            color: '#000',
            fontSize: 10,
            fontWeight: 300,
            fontStyle: 'italic',
          },
        },
      },
      '& .item_bloc': {
        //maxWidth: 310,
        margin: '0 auto 20px',
        '& .title_bloc': {
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: 10,
          '& h2': {
            color: '#000',
            fontSize: 14,
            fontWeight: 700,
            margin: 0,
            lineHeight: '1.2',
          },
          '& .btn_title': {
            fontSize: '1rem',
            marginLeft: 8,
            padding: 0,
            '& svg': {
              fill: theme.palette.primary.main,
              fontSize: '1rem',
            },
          },
          '& .subTitle': {
            color: '#979797',
            flexBasis: '100%',
            fontSize: 14,
            fontStyle: 'italic',
            margin: '6px 0 0',
            width: '100%',
          },
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
            '& > div': {
              marginBottom: 0,
            },
          },
          '& input': {
            borderRadius: 35,
            fontSize: 12,
            height: 32,
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
          width: 115,
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
        '& .typeProject_item': {
          maxWidth: 115,
        },
        "& .selectBox_item": {
          marginBottom: 10,
          "& > label": {
          },
          "& .selectBox": {
            border: 'solid 1px #dfdfdf',
            boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
            borderRadius: 25,
            fontSize: 12,
            padding: 0,
            "&.Mui-focused": {
              background: "none",
            },
            "& > div": {
              background: "none",
              height: 32,
              display: 'flex',
              alignItems: "center",
              padding: "0 10px",
            },
            "&:before, &:after": {
              display: "none",
            },
            "& svg": {
              right: 2,
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
        '& .textarea_item': {
          position: 'relative',
          '& .textLeft': {
            color: '#000',
            fontSize: 10,
            fontStyle: 'italic',
            margin: 0,
            position: 'absolute',
            right: 10,
            bottom: 10,
            zIndex: 1,
          },
        },
        '& .textarea_input': {
          color: '#000',
          border: 'solid 1px #dfdfdf',
          borderRadius: 12,
          boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
          fontFamily: 'Nunito',
          fontSize: 12,
          padding: 16,
          height: 182,
          resize: 'none',
          width: '100%',
          '&::-webkit-input-placeholder': {
            color: '#979797',
            fontStyle: 'italic',
          },
          '&:focus': {
            outline: 'none',
          },
        },
        '& .skills_bloc': {
          '& .selected_skills, & .all_skills': {
            display: 'flex',
            flexWrap: 'wrap',
            margin: -2.5,
            paddingBottom: 10,
          },

          '& .all_skills': {
            borderRadius: 12,
            border: '1px solid #dfdfdf',
            boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
            height: 162,
            overflow: 'hidden auto',
            padding: 10,
          },
          '& .inputGroup': {
            backgroundColor: '#fff',
            borderRadius: 0,
            border: 'none',
            display: 'block',
            margin: 2.5,
            minWidth: 65,
            overflow: 'hidden',
            '& label': {
              borderRadius: 20,
              color: '#000',
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: 12,
              lineHeight: '100%',
              padding: '5px 12px',
              height: 30,
              textAlign: 'center',
              transition: 'all .15s ease-in-out',
              width: '100%',
            },
            '& input': {
              display: 'none',
            },
            '& input:checked ~ label': {
              backgroundColor: '#eeecff',
              borderColor: '#b9b3ff',
              color: '#8870FF',
            },
          },
        },
        '& .videoPitch_bloc': {
          '& .upload_bloc': {
            '& .upload_content': {
              height: 145,
            },
          },
        },
      },
      '& .btn-group': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .btn': {
          borderRadius: 35,
          fontWeight: 600,
          fontSize: 12,
          height: 35,
          width: 120,
        },
      },
    },
  }),
  { name: 'description' },
);

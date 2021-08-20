import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    mainPage: {
      '& .wrapPage': {
        padding: '0 20px 10px',
      },
    },
    list_coachs: {
      margin: '20px auto 0',
      maxWidth: 335,
      width: '100%',
      '@media (min-width: 768px)': {
        maxWidth: '100%',
        justifyContent: 'flex-start',
      },
      '@media (min-width: 992px)': {},
      '@media (min-width: 1280px)': {
        maxWidth: 1280,
      },
      '& .item_bloc': {
        marginBottom: 10,
        width: '100%',
        '& .titre_item': {
          color: '#000',
          fontSize: 14,
          fontWeight: 700,
          margin: '0 0 10px',
        },
        '& .item_list': {
          display: 'flex',
          flexWrap: 'wrap',
          '@media (min-width: 768px)': {
            margin: '0 -8px',
          },
        },
      },
      '& .coachBloc': {
        '@media (min-width: 640px)': {
          maxWidth: '100%',
        },
        '@media (min-width: 768px)': {
          margin: '0 8px',
          width: 'calc(50% - 16px)',
        },
        '@media (min-width: 800px)': {
          width: 'calc(33.33333% - 16px)',
        },
        '@media (min-width: 1200px)': {
          width: 'calc(25% - 16px)',
        },
      },
    },
    modalCalendar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    drawerCalendar: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    paperDrawer: {
      borderRadius: '15px 15px 0px 0px',
    },
    paperCalendar: {
      backgroundColor: '#fff',
      border: 'none',
      borderRadius: '15px 15px 0px 0px',
      padding: theme.spacing(5.5, 2.5, 2.5),
      position: 'relative',
      maxWidth: 480,
      margin: 'auto',
      width: '100%',
      '& .btn_close': {
        position: 'absolute',
        right: 4,
        top: 4,
        '& svg': {
          color: '#000',
          fontSize: '0.875rem',
          width: '0.875rem',
        },
      },
      '& .btn_handleDrawer': {
        background: '#e5e5e5',
        borderRadius: 8,
        height: 8,
        position: 'absolute',
        left: '50%',
        top: 15,
        transform: 'translateX(-50%)',
        width: 110,
      },
      '& .content_calendar': {},
      '& .header_calendar': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        '& h2': {
          color: '#000',
          fontSize: 14,
          fontWeight: 700,
          margin: 0,
        },
        '& .btn_book': {
          borderRadius: 18,
          height: 35,
          width: 84,
        },
      },
      '& .body_calendar': {
        '& .field_item': {
          marginBottom: 20,
          '& label': {
            fontStyle: 'normal',
            fontSize: 10,
            fontWeight: 700,
            transform: 'none',
          },
          '& > div': {
            '& input': {
              fontSize: 12,
            },
          },
        },
      },

      '& .valid_calendar': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        margin: '0 auto',
        maxWidth: 320,
        textAlign: 'center',
        '& h2': {
          color: '#8870ff',
          margin: '0 0 28px',
        },
        '& .img_path': {
          marginBottom: 40,
          textAlign: 'center',
          '& img': {
            height: 'auto',
            maxWidth: '100%',
          },
        },
        '& .text_bloc': {
          fontSize: 14,
          textAlign: 'center',
          '& p': {
            fontSize: 14,
            color: '#000',
            margin: '0 0 20px',
          },
          '& .purple_text': {
            color: '#8870ff',
          },
          '& .link': {
            cursor: 'pointer',
            fontSize: 14,
            textDecoration: 'none',
            borderBottom: '1px solid #8870ff',
          },
        },
      },
    },
  }),
  { name: 'Coachs' },
);

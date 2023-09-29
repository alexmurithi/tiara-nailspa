import { makeStyles } from 'tss-react/mui'

const homeStyles = makeStyles()(theme => {
  return {
    heroWrapper: {
      width: '100%',
      height: '680px',
      position: 'relative',
      color: theme.palette.common.white,
    },
    heroGradient: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(to bottom, #DB2777, #FFFFFF)',
      opacity: 0.4,
    },
    heroContentWrapper: {
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(8),
      },
      marginTop: theme.spacing(14),
      textAlign: 'center',
    },
    heroContentDescription: {
      [theme.breakpoints.down('md')]: {
        fontSize: '14px',
        fontWeight: '300',
      },
    },
    heroContentH1: {
      textTransform: 'capitalize',
      [theme.breakpoints.down('md')]: {
        fontSize: '20px',
      },
    },
    heroCard: {
      background: 'transparent',
      border: `2px solid ${theme.palette.common.white}`,
      borderRadius: '12px',
      color: theme.palette.common.white,
      width: '320px',
      height: '200px',
      [theme.breakpoints.down('md')]: {
        overflowY: 'scroll',
        width: '100%',
        height: '100px',
      },
    },
    heroCardContentStack: {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    heroCardContentText: {
      [theme.breakpoints.down('md')]: {
        fontSize: '14px',
      },
    },
    heroBookAppointmentBtnWrapper: {
      margin: `${theme.spacing(6)} 0 !important`,
    },
    heroBookAppointmentBtn: {
      color: theme.palette.common.white,
      borderRadius: 0,
      width: '375px',
      padding: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    heroBookAppointmentBtnText: {
      fontWeight: 'bold',
    },
  }
})

export default homeStyles

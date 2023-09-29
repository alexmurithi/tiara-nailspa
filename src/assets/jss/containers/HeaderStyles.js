import { makeStyles } from 'tss-react/mui'

const headerStyles = makeStyles()(theme => {
  return {
    appBar: {
      background: theme.palette.background.paper,
    },
    bookAppointmentBtnWrapper: {
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
      flexGrow: 1,
    },
    bookAppointmentBtn: { padding: theme.spacing(1) },
    bookAppointmentBtnText: {
      fontWeight: 'bold',
    },
    menuWrapper: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      flexGrow: 0,
    },
  }
})

export default headerStyles

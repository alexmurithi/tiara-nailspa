/* eslint-disable no-unused-vars */
import { makeStyles } from 'tss-react/mui'

const desktopNavTabsStyles = makeStyles()(theme => {
  return {
    root: {
      flexGrow: 1,
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    desktopTabs: {
      '& .MuiTab-root': { color: '#493347', fontWeight: 'bold' },
      '& .MuiTabs-indicator': { display: 'none' },
    },
  }
})
export default desktopNavTabsStyles

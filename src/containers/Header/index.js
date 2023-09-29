import React, { useState } from 'react'
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Button,
  IconButton,
  Typography,
  SwipeableDrawer,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import PropTypes from 'prop-types'
import LogoImage from '@images/logo.svg'
import Logo from '@components/Logo'
import headerStyles from '@styles/containers/HeaderStyles'
import TiaraMenuIcon from '@components/TiaraMenuIcon'
import DesktopNavTabs from './DesktopNavTabs'
import DrawerMenuList from './DrawerMenuList'

const Header = ({ tabValue, handleDesktopTabs }) => {
  const { classes } = headerStyles()
  const theme = useTheme()

  const isMobileTablet = useMediaQuery(theme.breakpoints.down('md'), {
    noSsr: true,
  })

  const [state, setState] = useState({ left: false })

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setState({ ...state, [side]: open })
  }

  const handleDrawer = () => {
    setState({ ...state, left: true })
  }

  return (
    <>
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <Logo link="/" url={LogoImage} />
            </Box>
            <DesktopNavTabs
              tabValue={tabValue}
              handleDesktopTabs={handleDesktopTabs}
            />

            <Box className={classes.bookAppointmentBtnWrapper}>
              <Button variant="outlined" className={classes.bookAppointmentBtn}>
                <Typography
                  variant="subtitle2"
                  className={classes.bookAppointmentBtnText}
                >
                  Book Appointment Now
                </Typography>
              </Button>
            </Box>
            <Box className={classes.menuWrapper}>
              <IconButton edge="start" onClick={handleDrawer}>
                <TiaraMenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        {isMobileTablet && (
          <SwipeableDrawer
            open={state.left}
            onOpen={toggleDrawer('left', true)}
            onClose={toggleDrawer('left', false)}
          >
            <DrawerMenuList side="left" toggleDrawer={toggleDrawer} />
          </SwipeableDrawer>
        )}
      </AppBar>
      <Toolbar />
    </>
  )
}

Header.propTypes = {
  tabValue: PropTypes.number,
  handleDesktopTabs: PropTypes.func,
}

export default React.memo(Header)

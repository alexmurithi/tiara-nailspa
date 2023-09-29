import React from 'react'
import { makeStyles } from 'tss-react/mui'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
} from '@mui/material'
import { navigationTabs } from '@utils/Navigation'
import PropTypes from 'prop-types'

const useStyles = makeStyles()(() => {
  return {
    menuWrapper: {
      width: 250,
    },
  }
})

const DrawerMenuList = ({ side, toggleDrawer }) => {
  const { classes } = useStyles()
  return (
    <Box
      component="div"
      role="presentation"
      className={classes.menuWrapper}
      //   onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List disablePadding>
        {navigationTabs.map((tab, index) => (
          <>
            <ListItem key={index}>
              <ListItemButton>
                <ListItemText
                  primary={tab}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}
                  sx={{ textTransform: 'uppercase' }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  )
}

DrawerMenuList.propTypes = {
  side: PropTypes.string,
  toggleDrawer: PropTypes.func,
}

export default DrawerMenuList

import React, { useState } from 'react'
import { Box, Tabs, Tab } from '@mui/material'

import { navigationTabs } from 'src/utils/Navigation'
import desktopNavTabsStyles from '@styles/containers/DesktopNavTabsStyles'

const DesktopNavTabs = () => {
  const { classes } = desktopNavTabsStyles()
  const [tabValue, setDesktopTabValue] = useState(0)

  const handleDesktopTabs = (event, newValue) => {
    setDesktopTabValue(newValue)
  }

  return (
    <Box className={classes.root}>
      <Tabs
        textColor="primary"
        value={tabValue}
        onChange={handleDesktopTabs}
        centered
        className={classes.desktopTabs}
      >
        {navigationTabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab}
            disableRipple
            className={classes.desktopTab}
          />
        ))}
      </Tabs>
    </Box>
  )
}

export default React.memo(DesktopNavTabs)

/* eslint-disable import/prefer-default-export */
import { useTheme, useMediaQuery } from '@mui/material'

const theme = useTheme()

export const isMobileTablet = useMediaQuery(theme.breakpoints.down('md'), {
  noSsr: true,
})

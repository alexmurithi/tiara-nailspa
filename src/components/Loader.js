import React from 'react'
import { CircularProgress, Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(theme => {
  return {
    loaderWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    loader: {
      margin: theme.spacing(2),
      color: theme.palette.primary.main,
    },
  }
})

const Loader = () => {
  const { classes } = useStyles()

  return (
    <Box className={classes.loaderWrapper}>
      <CircularProgress className={classes.loader} />
    </Box>
  )
}

export default Loader

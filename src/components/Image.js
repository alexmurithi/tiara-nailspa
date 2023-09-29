import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => {
  return {
    image: {
      objectFit: 'cover',
    },
  }
})

const Image = ({ src, alt, ...rest }) => {
  const { classes } = useStyles()
  return (
    <img src={src} alt="Taiara Nail Spa" {...rest} className={classes.image} />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Image

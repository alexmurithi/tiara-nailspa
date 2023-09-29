import React from 'react'
import { Link } from '@mui/material'
import PropTypes from 'prop-types'

const Logo = ({ link, url }) => {
  return (
    <Link href={link}>
      <img src={url} alt="logo" />
    </Link>
  )
}

Logo.propTypes = {
  link: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Logo

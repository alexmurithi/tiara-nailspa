/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react'
import PropTypes from 'prop-types'
import Header from '@containers/Header'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.element,
}

export default React.memo(MainLayout)

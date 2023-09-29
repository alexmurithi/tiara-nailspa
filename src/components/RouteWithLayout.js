/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { Route, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

const RouteWithLayout = ({ layout: Layout, children, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        <Layout>
          <Outlet />
        </Layout>
      }
    >
      {children}
    </Route>
  )
}
RouteWithLayout.propTypes = {
  route: PropTypes.any,
  layout: PropTypes.any,
}
export default RouteWithLayout

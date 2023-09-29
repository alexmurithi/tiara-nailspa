import React, { lazy } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import MainLayout from '@layouts/MainLayout'

const Home = lazy(() => import('@pages/Home'))

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <MainLayout>
            <Outlet />
          </MainLayout>
        }
      >
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes

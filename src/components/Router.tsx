import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../routes/routes'

function Router() {
  return (
    <Routes>
        {publicRoutes.map(route => (<Route key={route.path} path={route.path} element={<route.element />} />))}
    </Routes>
  )
}

export default Router
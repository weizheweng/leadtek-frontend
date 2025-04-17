import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import './global.css'
import { Home } from './pages/Home'
import { Layout } from './pages/Layout'

export default function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Navigate to="/leadtek-frontend" replace /> },
        { path: '/leadtek-frontend', element: <Home /> },
        { path: '*', element: 'NotFound' },
      ],
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

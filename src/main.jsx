import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import theme from './lib/theme'
import './index.css'
import Blogs from './pages/Blogs'
import Blog from './pages/Bolg'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Blogs />
  },
  {
    path: '/:id',
    element: <Blog />
  }
])

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
)

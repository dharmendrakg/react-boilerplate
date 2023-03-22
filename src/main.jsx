import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import theme from './lib/theme'
import './index.css'
import Homepage from './pages/Homepage'
import About from './pages/About'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/about',
    element: <About />
  }
])

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
)

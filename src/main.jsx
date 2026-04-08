import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router'
import BookContextBuild from './context/BookContextBuild'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookContextBuild>

    <RouterProvider router={router} />

    <ToastContainer />
    
    </BookContextBuild>
  </StrictMode>,
)

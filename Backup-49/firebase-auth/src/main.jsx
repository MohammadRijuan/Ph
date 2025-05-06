import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root.jsx'
import Login from './components/Login.jsx'


const router = createBrowserRouter([{
  path :'/',
  Component: Root,

  children:[
    {
      path:'/',
      Component: Login
    }
  ]

}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />

    </RouterProvider>
  </StrictMode>,
)

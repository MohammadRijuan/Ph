import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layout/Root.jsx'
import Home from './component/Home.jsx'
import Login from './component/Login.jsx'
import Register from './component/Register.jsx'
import Signup from './component/Signup.jsx'


const router = createBrowserRouter([{
  path: '/',
  Component: Root,
  children: [
    {
      index: true,
      Component: Home,

    },
  {
    path:'Login',
    Component:Login
  },
  {
    path:'Register',
    Component:Register
  },
  {
    path:'signup',
    Component:Signup
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

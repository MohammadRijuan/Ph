import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Roots from './Components/Roots.jsx'
import Users from './Components/Users.jsx'
import UserDetails from './Components/UserDetails.jsx'
import Update from './Components/Update.jsx'

const router = createBrowserRouter([{
  path:'/',
  Component: Roots,
  children: [
    {index:true,Component:App},
    {
      path:'users/:id',
      loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),

     Component:UserDetails
  },
    {
      path:'update/:id',
      loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),

     Component:Update
  }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App></App>
    </RouterProvider>
  </StrictMode>,
)

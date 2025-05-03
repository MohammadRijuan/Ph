
import './App.css'
import { Outlet } from 'react-router'

function App() {
 

  return (
    <>
      <div>
        <h1>Navbar</h1>
        {/* placeholder component */}
        <Outlet></Outlet>
        <h1>footer</h1>
      </div>
    </>
  )
}

export default App

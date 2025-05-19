
import './App.css'
import Users from './Components/Users'

const userPromise = fetch('http://localhost:3000/users')
.then(res=>res.json())

function App() {


  return (
    <div>
      simple crud client
      <Users userPromise={userPromise}></Users>
    </div>
  )
}

export default App

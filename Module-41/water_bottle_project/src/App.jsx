import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bottles from './components/bottles/bottles'

function App() {
  const [count, setCount] = useState(0)


  const waterBottlePromise = fetch('./bottles.json')
  .then(res=> res.json())

  return (
    <>
      <h1>Water bottle project</h1>

      <Suspense fallback={<h3>loading ...</h3>}>
        <Bottles waterBottlePromise={waterBottlePromise}></Bottles>
      </Suspense>
     
    </>
  )
}

export default App

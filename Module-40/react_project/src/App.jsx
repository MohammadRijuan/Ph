
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/countries'

const countryPromise = fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())


function App() {
  
  return (
    <>
    <Suspense fallback={<h3>loading....</h3>}>
      <Countries countryPromise={countryPromise}></Countries>

    </Suspense>
      
      
    </>
  )
}

export default App

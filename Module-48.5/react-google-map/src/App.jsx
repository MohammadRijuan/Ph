
import { Map } from '@vis.gl/react-google-maps'
import './App.css'

function App() {


  return (
    <>
      
      <h1>React Google map</h1>
      <Map
      style={{width: '120vw', height: '100vh'}}
      defaultCenter={{lat: 22.3703, lng: 91.8434}}
      defaultZoom={100}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
      
    </>
  )
}

export default App

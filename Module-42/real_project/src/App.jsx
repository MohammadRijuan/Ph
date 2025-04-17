import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/navbar'
import Blogs from './components/Blogs/blogs'

function App() {
  // const [count, setCount] = useState(0)
  
  const[bookmark,setBookmark]=useState([])
  const[readingTime,setReadingTime]=useState(0)

  const handleBookmark=(blog)=>{
    setBookmark([...bookmark,blog])

  }
  console.log(bookmark)

  const handleMarkAsReading=(time)=>{
    // console.log('clicked reading time')
    const newTime = readingTime+time;
    setReadingTime(newTime)
  }



  return (
    <>
      
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-container w-[65%]">
          <Blogs 
          handleBookmark={handleBookmark}
          handleMarkAsReading={handleMarkAsReading}
          ></Blogs>
        </div>
        <div className="right-container w-[35%]">
          <h1>Reading Time :{readingTime} </h1>
          <h1>Bookmarked : {bookmark.length}</h1>
          {
            bookmark.map((mark)=><p>{mark.name}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App

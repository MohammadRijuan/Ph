import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDo amount="7000"></ToDo>
      <h1>Vite + React</h1>
      <Developer name="Rijuan" tech="js"></Developer>
      <Developer name="Monju" tech="python"></Developer>
      <Person></Person>
      <Sports></Sports>
      <Player name="Rizwan" runs="5000"></Player>
      <Eid event="10200"></Eid>
      
      
    </>
  )
}


// making a component by making a function
// we have to declare everything by taking the capital letter of every function name so that we can understand it has been made by us

function Developer (props){
  console.log(props)
  return (
    <div style={{
      border: '2px solid green',
      borderRadius : '5px'
    }}>
      <h1>Developer : {props.name}</h1>
      <h1>technology : {props.tech}</h1>
    </div>
  )
}


function Eid({event}){
  return (
    <div>
      <h1>Eid salami : {event}</h1>
    </div>
  )
}



// destructuring
// const (name,runs) = {name:'Rizwan', runs : '5000'}
function Player ({name,runs}){
  return(
    <div className='student'>
      <h3> Name: {name}</h3>
      <p> Runs : {runs}</p>
    </div>
  )
}


function Person(){
  const name="Rijuan"
  const classs=10;

  // to include inline css we have to use object
  const personStyleh1 ={
    color : 'red',
    // textAlign : 'left'
  } 
  return(
    <div className='person'>
      <h1 style={personStyleh1}>my name is : {name}</h1>
      <h1>he is in class : {classs}</h1>
    </div>
  )
}

function Sports(){
  const game="cricket"

  return(
    <div>
      <h1>he loves : {game}</h1>
      
    </div>
  )
}

export default App

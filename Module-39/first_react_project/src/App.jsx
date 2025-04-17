import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './counter'

import Batsman from './batsman'

import Users from './users'

import Friends from './friends'




const fetchUser = fetch('https://jsonplaceholder.typicode.com/todos/')
.then(res=> res.json())


const fetchFriend=async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    return res.json()
    
}


function App() {

  // const fetchFriends =fetchFriend()

  function handleClick(){
    alert('i am clicked')
  }
  const handleClick3=()=>{
    alert('i am clicked 3')
  }
  return (
    <>
    {/* how to apply use on api fetching */}
    <Suspense fallback={<h3>Loading...</h3>}>
      <Users fetchUser ={fetchUser}></Users>
    </Suspense>


    <Suspense fallback={<h3>Friends are coming ....</h3>}>
        <Friends fetchFriend={fetchFriend()}></Friends>
    </Suspense>




    <Batsman></Batsman>
      <Counter></Counter>
      <h1>Vite + React</h1>
      {/* <button onclick="handleclick()">click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={function handleClick(){
        alert('i am clicked 2')
      }}>Click me 2</button>
      <button onClick={handleClick3}>Click me 3</button>
      
    </>
  )
}

export default App;

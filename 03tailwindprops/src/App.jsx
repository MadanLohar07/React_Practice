import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  console.log("hello");
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind test</h1>
     <Card username="demotxt1" btntext="click it!"/>
     <Card username="demotxt2" btntext="go Beyond!"/>

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-pink-600 p-4 rounded-2xl mb-4'> Tailwind Test</h1>
      <Card   username = " chai"  btnText="Click me" />
      <Card  username ="ilove "/>
  </>
  )
}

export default App

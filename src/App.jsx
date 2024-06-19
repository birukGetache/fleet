import { useState } from 'react'
import './App.css'
import HamberGer from './Component/Nav/HumberGer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HamberGer></HamberGer>
    </>
  )
}

export default App

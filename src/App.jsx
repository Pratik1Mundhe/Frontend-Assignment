import { useState } from 'react'
import './App.css'
import HamburgerMenu from './components/HamburgerMenu'
import MainContainer from './components/MainContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HamburgerMenu />
      <MainContainer />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Section1 from './body/Section1'
import Map from './Components/Map'
import Body from './body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Body/>
   
   
   </>
  )
}

export default App

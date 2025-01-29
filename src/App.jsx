import { useState } from 'react'

import './App.css'

import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import About from './Pages/About/About'
import Activites from './Pages/Activites/Activites'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Routes>
    <Route path='/' element={<Layout/>}>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/activites' element={<Activites/>}/>
    </Route>
   </Routes>
   </>
  )
}

export default App

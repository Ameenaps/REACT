import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { AppBar, Toolbar } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import View from './components/View'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <NavBar></NavBar>
  
    <Routes>
         <Route path='/Add' element={<Add/>}/>
         <Route path='/View' element={<View/>}/>
    </Routes>
  
      </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import GetTable from './components/GetTable'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Buttons from './components/Buttons'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <br /><br />
      <Routes>
        <Route  path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/getTable' element={<GetTable/>}/>
        <Route path='/StateBasics' element={<StateBasics/>}/>
        <Route path='/Counter' element={<Counter/>}/>
        <Route path='/Buttons' element={<Buttons/>}/>
        <Route path='/product' element={<Product/>}/>
       </Routes>
  
  <NavBar></NavBar>

 
  
    </>
  )
}

export default App

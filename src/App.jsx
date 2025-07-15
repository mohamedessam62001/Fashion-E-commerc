import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPages/LoginPage'
import Header from './Components/Header'
import LandingPage from './Pages/Pages-Fashion/LandingPage'
import Categorys from './Pages/Pages-Fashion/Categorys'
import Cart from './Pages/Pages-Fashion/Cart'

export default function App() {
  return (
    <div className=''>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<h1>About Page</h1>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Home'>
        <Route index element={<Categorys/>}/>
        <Route path=':CategoryId' element={<h1>CAte Deltails</h1>}/>
        </Route>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*'element={<h1>Eorr || 404  </h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
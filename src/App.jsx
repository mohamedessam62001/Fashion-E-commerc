import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categorys from './Pages/Categorys'
import LoginPage from './Pages/LoginPages/LoginPage'
import LandingPage from './Pages/LoginPages/LandingPage'
import Header from './Components/Header'

export default function App() {
  return (
    <div className=''>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Home'>
        <Route index element={<Categorys/>}/>
        <Route path='new' element={<h1>Add CAt</h1>}/>
        <Route path=':CategoryId' element={<h1>CAte Deltails</h1>}/>
        </Route>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*'element={<h1>Eorr || 404  </h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
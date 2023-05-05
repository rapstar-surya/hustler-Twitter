import React from 'react'
import Home from './section/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/login' element={}/>
        <Route path='/register' element={}/> */}
      </Routes>
    </BrowserRouter>
  )
}

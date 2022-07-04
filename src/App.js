import React from 'react'
import { GlobalStyles } from './components/styles/GlobalStyles'
import { Logo } from './components/Logo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { NavBar } from './components/NavBar'

const App = () => {
  return (
    <><GlobalStyles />
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:categoryId' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>

  )
}

export default App

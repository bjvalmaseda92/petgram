import React from 'react'
import { GlobalStyles } from './components/styles/GlobalStyles'
import { Logo } from './components/Logo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { NavBar } from './components/NavBar'
import { ProtectedRoutes } from './routes/ProtectedRoutes'
import { Favs } from './pages/Favs'
import { User } from './pages/User'

const App = () => {
  return (
    <><GlobalStyles />
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:categoryId' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/favs' element={<ProtectedRoutes><Favs /></ProtectedRoutes>} />
          <Route path='/user' element={<ProtectedRoutes><User /></ProtectedRoutes>} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>

  )
}

export default App

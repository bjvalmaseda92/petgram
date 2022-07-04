import React from 'react'
import { CategoryList } from './components/CategoryList'
import { GlobalStyles } from './components/styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <><GlobalStyles /><Logo />
      {detailId
        ? <PhotoCardWithQuery id={detailId} />
        : <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pet/:id' element={<Home />} />
          </Routes>
          </BrowserRouter>}
    </>

  )
}

export default App

import React from 'react'
import { CategoryList } from './components/CategoryList'
import { GlobalStyles } from './components/styles/GlobalStyles'
import { PhotoCardList } from './components/PhotoCardList'
import { Logo } from './components/Logo'

const App = () => {
  return (
    <><GlobalStyles /><Logo /><CategoryList /><PhotoCardList /></>
  )
}

export default App

import React from 'react'
import { CategoryList } from './components/CategoryList'
import { GlobalStyles } from './components/styles/GlobalStyles'
import { PhotoCardList } from './components/PhotoCardList'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <><GlobalStyles /><Logo /><CategoryList />
      {detailId
        ? <PhotoCardWithQuery id={detailId} />
        : <><PhotoCardList categoryId={3} /></>}
    </>

  )
}

export default App

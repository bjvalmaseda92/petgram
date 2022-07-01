import React from 'react'
import { PhotoCard } from '../PhotoCard'

const PhotoCardList = () => {
  return (
    <ul>
      {[1, 2, 3].map(item => <li key={item}><PhotoCard /></li>)}
    </ul>
  )
}

export { PhotoCardList }

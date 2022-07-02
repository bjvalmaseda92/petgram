import React from 'react'
import { PhotoCard } from '../PhotoCard'

const PhotoCardList = () => {
  return (
    <ul>
      {[1, 2, 3, 5, 6, 8, 9, 10].map(item => <PhotoCard key={item} />)}
    </ul>
  )
}

export { PhotoCardList }

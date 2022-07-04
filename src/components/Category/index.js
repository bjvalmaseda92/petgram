import React from 'react'
import { Link, Image } from './style'
const DEFAULT_COVER = 'https://i.imgur.com/dJa0Hpl.jpg'

const Category = ({ cover = DEFAULT_COVER, path = '#', emoji = '?' }) => {
  return (
    <Link to={path}>
      <Image src={cover} />
      {emoji}
    </Link>
  )
}

export { Category }

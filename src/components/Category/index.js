import React from 'react'
import { Anchor, Image } from './style'
const DEFAULT_COVER = 'https://i.imgur.com/dJa0Hpl.jpg'

const Category = ({ cover = DEFAULT_COVER, path, emoji = '?' }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  )
}

export { Category }

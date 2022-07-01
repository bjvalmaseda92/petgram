import React from 'react'

const DEFAULT_COVER = 'https://i.imgur.com/dJa0Hpl.jpg'

const Category = ({ cover = DEFAULT_COVER, path, emoji = '?' }) => {
  return (
    <a href={path}>
      <img src={cover} />
      {emoji}
    </a>
  )
}

export { Category }

import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery, gql } from '@apollo/client'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const PhotoCardList = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId }
  })

  if (loading) return <span>loading</span>
  if (error) return <p>Error</p>

  return (
    <ul>
      {
        data.photos.map(photoCard => <PhotoCard key={photoCard.id} {...photoCard} />)
      }
    </ul>
  )
}

export { PhotoCardList }

import React from 'react'
import { useParams } from 'react-router-dom'
import { CategoryList } from '../components/CategoryList'
import { PhotoCardList } from '../components/PhotoCardList'

const Home = ({ id }) => {
  const params = useParams()
  return (
    <>
      <CategoryList />
      <PhotoCardList categoryId={params.categoryId} />
    </>
  )
}

export default Home

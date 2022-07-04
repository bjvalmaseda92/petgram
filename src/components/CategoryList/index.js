import React, { useEffect, useState } from 'react'
import { useGetCategoriesData } from '../../hooks/useGetCategoriesData'
import { Category } from '../Category'
import { Item, List } from './style'
import { CategorySkeleton } from './CategorySkeleton'

const CategoryList = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useGetCategoriesData()
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      newShowFixed !== showFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll) // remove event listener
  }, [showFixed])

  const renderList = (fixed) => (

    <List fixed={fixed}>
      {
      loading
        ? [1, 2, 3, 4].map(item => <Item key={item}><CategorySkeleton /></Item>)
        : categories.map(category =>
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>)
}
    </List>)

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export { CategoryList }

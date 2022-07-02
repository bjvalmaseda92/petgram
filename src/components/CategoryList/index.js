import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './style'

const CategoryList = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    window.fetch('https://petgram-bjvalmaseda-server.vercel.app/categories')
      .then(response => response.json())
      .then(response => setCategories(response))
  }, [])
  return (
    <List>{categories.map(category => <Item key={category.id}> <Category {...category} /></Item>)}</List>)
}

export { CategoryList }

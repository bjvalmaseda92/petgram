import React from 'react'
import { Category } from '../Category'
import { Item, List } from './style'
const CategoryList = () => {
  return (
    <List>{[1, 2, 3, 4].map(category => <Item key={category}> <Category /></Item>)}</List>)
}

export { CategoryList }

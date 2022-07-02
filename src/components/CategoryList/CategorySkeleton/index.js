import React from 'react'
import { ContainerCategorySkeleton, CategoryImage, CategoryTitle } from './style'

export const CategorySkeleton = props => {
  console.log(props)
  return (
    <ContainerCategorySkeleton>
      <CategoryImage light={props.light} />
      <CategoryTitle light={props.light} />
    </ContainerCategorySkeleton>
  )
}

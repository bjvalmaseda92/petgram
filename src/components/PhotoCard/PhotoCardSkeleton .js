import React from 'react'
import ContentLoader from 'react-content-loader'

const PhotoCardSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={450}
    height={200}
    viewBox='0 0 400 200'
    backgroundColor='#f3f3f3'
    foregroundColor='#ebeaea'
    {...props}
  >
    <rect x='-26' y='16' rx='2' ry='2' width='450' height='216' />
  </ContentLoader>
)

export default PhotoCardSkeleton

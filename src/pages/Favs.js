import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_FAVORITES = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const Favs = () => {
  const { loading, error, data } = useQuery(GET_FAVORITES)

  return (
    <>{error && error.message}
      {loading && <h2>Cargando</h2>}
      {console.log(data)}
    </>

  )
}

export { Favs }

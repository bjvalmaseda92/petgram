import { gql, useMutation } from '@apollo/client'

function useToggleLike () {
  const TOGGLE_LIKE = gql` 
    mutation likeAnonymousPhoto($input: LikePhoto!) {
        likeAnonymousPhoto(input: $input) {
          id
          liked
          likes
        }
      }
    `

  const [mutateLikes, { data, loading, error }] = useMutation(TOGGLE_LIKE)

  return [mutateLikes, { data, loading, error }]
}

export { useToggleLike }

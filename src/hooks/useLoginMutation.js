import { gql, useMutation } from '@apollo/client'
const LOGIN = gql`mutation login($input: UserCredentials!){
    login (input: $input)
}
`
function useLoginMutation () {
  const [login, { error, loading }] = useMutation(LOGIN)

  return { login, error, loading }
}

export { useLoginMutation }

import { useQuery, gql } from '@apollo/client'

const GET_SPECIALITIES = gql`
query Events {
  specialities {
    id
    description
  }
}
`

export const useSpecialities = () => {
  const { error, loading, data } = useQuery(GET_SPECIALITIES)

  return {
    error,
    data,
    loading
  }
}
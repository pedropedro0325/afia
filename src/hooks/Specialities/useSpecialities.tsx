import { useQuery, gql } from '@apollo/client'

const GET_SPECIALITIES = gql`
query Query {
  specialities {
    id
    description {
      fr
      en
    }
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
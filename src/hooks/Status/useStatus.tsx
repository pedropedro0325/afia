import { useQuery, gql } from '@apollo/client'

const GET_STATUS = gql`
query Query {
  manyStatus {
    id
    description {
      fr
      en
    }
  }
}
`

export const useStatus = () => {
  const { error, loading, data } = useQuery(GET_STATUS)
  return {
    error,
    data,
    loading
  }
}
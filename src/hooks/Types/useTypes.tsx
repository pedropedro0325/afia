import { useQuery, gql } from '@apollo/client'

const GET_TYPES = gql`
query PartakerTypes {
  partakerTypes {
    id
    description
  }
}
`

export const useTypes = () => {
  const { error, loading, data } = useQuery(GET_TYPES)

  return {
    error,
    data,
    loading
  }
}
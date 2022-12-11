import { useQuery, gql } from '@apollo/client'

const GET_STATUS = gql`
query Status {
  manyStatus {
    id
    description
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
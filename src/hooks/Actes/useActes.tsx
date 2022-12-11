import { useQuery, gql } from '@apollo/client'

const GET_ACTS = gql`
query Acts {
  acts {
    id
    description
    price
    specialities {
      description
      id
    }
  }
}
`

export const useActes = () => {
    const { error, loading, data } = useQuery(GET_ACTS)
    return {
        error,
        data,
        loading
    }
}
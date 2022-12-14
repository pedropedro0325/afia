import { useQuery, gql } from '@apollo/client'

const GET_ACTS = gql`
query Acts {
  acts {
    id
    description {
      fr
      en
    }
    price
    specialities {
      id
      description {
        en
        fr
      }
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
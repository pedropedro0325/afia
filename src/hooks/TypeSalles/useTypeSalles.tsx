import { useQuery, gql } from '@apollo/client'

const GET_VENUESTYPES = gql`
query Venues {
  venueTypes {
    id
    description
  }
}
`

export const useVenuesTypes = () => {
    const { error, loading, data } = useQuery(GET_VENUESTYPES)
    return {
        error,
        data,
        loading
    }
}
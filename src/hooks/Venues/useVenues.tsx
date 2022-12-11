import { useQuery, gql } from '@apollo/client'

const GET_VENUES = gql`
query Venues {
  venues {
    id
    typeId
    phoneNumber
    description
  }
}
`

export const useVenues = () => {
    const { error, loading, data } = useQuery(GET_VENUES)
    return {
        error,
        data,
        loading
    }
}
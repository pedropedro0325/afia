import { useQuery, gql } from '@apollo/client'

const GET_EVENTS = gql`
query {
    events {
      id
      description
      startDate
      endDate
    }
  }
`

export const useEvents = () => {
    const { error, loading, data } = useQuery(GET_EVENTS)

    return {
        error,
        data,
        loading
    }
}
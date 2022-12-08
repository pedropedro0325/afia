import { gql, useQuery } from "@apollo/client"

const GET_EVENT = gql`
  query Partakers($eventId: Int!) {
  event(eventId: $eventId) {
    id
    description
    statusId
    startDate
    endDate
    statusId
  }
}
`

export const usePatient = (eventId: any) => {
  const { data, error, loading } = useQuery(GET_EVENT, {
    variables: {
      eventId
    }
  })
  return {
    data, error, loading
  }
}
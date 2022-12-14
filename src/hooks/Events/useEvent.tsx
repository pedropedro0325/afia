import { gql, useQuery } from "@apollo/client"

const GET_EVENT = gql`
 query Event($eventId: Int!) {
  event(eventId: $eventId) {
    id
    description
    status {
      id
      description {
        fr
        en
      }
    }
    startDate
    endDate
    venue {
      id
      phoneNumber
      description
      venueType {
        id
        description
      }
    }
    care {
      patient {
        name
        id
        lastName
        phoneNumber
      }
      partakers {
        name
        lastName
        phoneNumber
        partakerType {
          description
        }
      }
      acts {
        description {
          fr
          en
        }
        price
        specialities {
          description {
            fr
            en
          }
        }
      }
    }
  }
}
`

export const useEvent = (eventId: any) => {
  const { data, error, loading } = useQuery(GET_EVENT, {
    variables: {
      eventId
    }
  })
  return {
    data, error, loading
  }
}
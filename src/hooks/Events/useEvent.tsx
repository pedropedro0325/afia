import { gql, useQuery } from "@apollo/client"

const GET_EVENT = gql`
  query Event($eventId: Int!) {
  event(eventId: $eventId) {
    id
    description
    status {
      id
      description
    }
    startDate
    endDate
    venue {
      id
      description
      venueType {
        description
        id
      }
    }
    care {
      id
      description
      specialities {
        id
        description {
          en
          fr
        }
      }
      diseases {
        description {
          en
          fr
        }
        diseaseLanguage {
          description
          id
        }
      }
      patient {
        name
        lastName
      }
      partakers {
        lastName
        name
        speciality {
          id
          description {
            en
            fr
          }
        }
      }
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
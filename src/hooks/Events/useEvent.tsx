import { gql, useQuery } from "@apollo/client"

const GET_EVENT = gql`
query Query($eventId: Int!) {
  event(eventId: $eventId) {
    id
    description
    status {
      id
      description {
        en
        fr
      }
    }
    startDate
    endDate
    venue {
      id
      venueType {
        id
        description
      }
      phoneNumber
      description
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
        id
        description {
          fr
          en
        }
        diseaseLanguage {
          id
          description
        }
      }
      patient {
        id
        name
        lastName
        phoneNumber
        email
        description
      }
      partakers {
        id
        name
        lastName
        phoneNumber
        email
        speciality {
          id
          description {
            fr
            en
          }
        }
      }
      acts {
        id
        description {
          fr
          en
        }
        price {
          partakerIds
          value
        }
        specialities {
          id
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
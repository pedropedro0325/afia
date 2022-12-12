import { useQuery, gql } from '@apollo/client'

const GET_EVENTS = gql`
query Query {
  events {
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
      description
      phoneNumber
      venueType {
      id
      description  
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
        id
        description {
          en
          fr
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
      }
      partakers {
        id
        name
        lastName
        partakerType {
          id
          description
        }
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
          en
          fr
        }
        price
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

export const useEvents = () => {
  const { error, loading, data } = useQuery(GET_EVENTS)
  return {
    error,
    data,
    loading
  }
}
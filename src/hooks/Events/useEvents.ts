import { useQuery, gql } from '@apollo/client'

const GET_EVENTS = gql`
query Query {
  events {
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
        id
        description
      }
    }
    care {
      id
      description
      diseases {
        id
        description {
          en
          fr
        }
        
      }
      specialities {
      id
      description {
        en
        fr
      }  
      }
      patient {
        id
        name
        lastName  
      }
      partakers {
        id
        name
        lastName  
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

export const useEvents = () => {
  const { error, loading, data } = useQuery(GET_EVENTS)
  return {
    error,
    data,
    loading
  }
}
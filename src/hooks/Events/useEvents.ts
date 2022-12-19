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
      venueType {
        description
        id
      }
      phoneNumber
    }
    care {
      id
      description
      specialities {
        id
        description {
          fr
          en
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
      }
      partakers {
        id
        name
        lastName
        phoneNumber
        email
        partakerType {
          id
          description
        }
        speciality {
          id
          description {
            fr
            en
          }
        }
        description
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

export const useEvents = () => {
  const { error, loading, data } = useQuery(GET_EVENTS)
  console.log("=============",error)
  return {
    error,
    data,
    loading
  }
}
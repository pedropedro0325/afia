import { useQuery, gql } from '@apollo/client'

const GET_EVENTS = gql`
query Events {
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
      typeId
      phoneNumber
      description
    }
    care {
      id
      description
      specialities {
        id
        description
      }
      diseaseId
      patient {
        id
        name
        lastName
        birthDate
        birthCityId
        adressId
        phoneNumber
        email
        description
      }
      partakers {
        id
        name
        lastName
        birthDate
        birthCityId
        adressId
        phoneNumber
        email
        partakerType {
          id
          description
        }
        speciality {
          id
          description
        }
        description
      }
      acts {
        id
        description
        price
        specialities {
          id
          description
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
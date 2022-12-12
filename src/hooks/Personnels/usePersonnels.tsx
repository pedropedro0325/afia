import { useQuery, gql } from '@apollo/client'

const GET_PERSONNELS = gql`
query Partakers {
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
      description
      id
    }
    speciality {
      id
      description {
        fr
      }
    }
    description
  }
}
`

export const usePersonnels = () => {
  const { error, loading, data } = useQuery(GET_PERSONNELS)

  return {
    error,
    data,
    loading
  }
}
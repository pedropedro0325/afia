import { useQuery, gql } from '@apollo/client'

const GET_PERSONNELS = gql`
query Query {
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
      description {
        en
        fr
      }
    }
    description
    creationDate
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
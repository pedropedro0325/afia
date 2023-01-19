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
    partakerTypes {
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
    creationDate
    createdBy
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
import { useQuery, gql } from '@apollo/client'

const GET_MEDECINS = gql`
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

export const useMedecins = () => {
  const { error, loading, data } = useQuery(GET_MEDECINS)
  console.log(error, data)
  return {
    error,
    data,
    loading
  }
}